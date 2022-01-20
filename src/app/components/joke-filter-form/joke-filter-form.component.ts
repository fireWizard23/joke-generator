import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cloneDeep, differenceWith, isEqual } from 'lodash';
import { pairwise } from 'rxjs';
import { isMultipleJokes, MultipleJokes } from 'src/app/misc/joke.model';
import { Keyable } from '../joke-filter/joke-filter.component';

@Component({
  selector: 'app-joke-filter-form',
  templateUrl: './joke-filter-form.component.html',
  styleUrls: ['./joke-filter-form.component.scss']
})
export class JokeFilterFormComponent implements OnInit {

  form!: FormGroup;

  oneTypeInputIsChecked = false;

  

 //#region Form Properties
  get categories() {
    return this.form.get('categories') as FormArray;
  }

  get blacklistFlags() {
    return this.form.get('blacklistFlags') as FormArray;
  }

  get type() {
    return this.form.get('type') as FormArray;
  }

  get amount() {
    return this.form.get("amount") as FormControl;
  }

  get idRange() {
    return this.form.get("idRange") as FormGroup;
  }
 //#endregion

  constructor(private fb : FormBuilder) { }

  @Output() onFormSubmit = new EventEmitter<any>();

  ngOnInit(): void {
    this.form = this.fb.group({
      categories: this.fb.array( [
        {
          name: 'any',
          value: true,
        },
        {
          name: 'misc',
          value: false,
        },
        {
          name: 'dark',
          value: false,
        },
        {
          name: 'programming',
          value: false,
        },
        {
          name: 'spooky',
          value: false,
        },
        {
          name: 'christmas',
          value: false,
        },
      ].map((v) => {
        return this.fb.group({ ...v });
      }) ),
      language: 'english',
      blacklistFlags: this.fb.array([
        {
          name: "nsfw",
          value: false,
        },
        {
          name: "religious",
          value: false,
        },
        {
          name: "political",
          value: false,
        },
        {
          name: "racist",
          value: false,
        },
        {
          name: "sexist",
          value: false,
        },
        {
          name: "explicit",
          value: false,
        },
      ].map((v) => this.fb.group(v))),
      type: this.fb.array([
        {
          name: "single",
          value: true,
        },
        {
          name: "twopart",
          displayName: "Two Part",
          value: true ,
        }
      ].map((v) => this.fb.group(v))), 
      idRange: this.fb.group({
        min: null,
        max: null,
        oneNumber: true,
      }),
      contains: "",
      amount: [1, [Validators.min(1), Validators.max(10)]],

    });
  
    

  



    this.categories.valueChanges.pipe(
      pairwise()
    ).subscribe(this.onCategoriesChange.bind(this))

    this.categories.patchValue([]) // So there would be two of emitted values!

        
  
    
  }

  //#region  OnChange Methods

  onIdRangeChange(e: any)  {
    const value = this.idRange.value;
     if(value.oneNumber) {
       if(e.target.type.toLowerCase() != "number") {
        const keys = Object.keys(this.idRange.value)
           .filter((v) => v != "oneNumber");
        const highest = keys
          .reduce((result: FormControl, item: string) => {
            const currentItem = this.idRange.get(item) as FormControl;
            if(result === currentItem) {
              return result
            }
            if(result.value === null) {
              return currentItem;
            } else if(currentItem?.value === null) {
              return result
            }

            if(result.value < currentItem?.value) {
              return currentItem ;
            }
            return result;
        }, this.idRange.get("max") as FormControl)
        keys.forEach((k) => {
          if(this.idRange.get(k) === highest) {
            return;
          }
          this.idRange.get(k)?.setValue(highest.value)
        })
        return;
       }

      let key = e.target.id.replace("idRange-", "")
      Object.keys(value).forEach((k) => {
        if(typeof value[k] === "boolean") {
          return;
        }

        this.idRange.get(k)?.setValue(value[key]);

      })


     }
  }


  onCategoriesChange(_values: any[][]) {
    const [oldValue, newValue] = _values;
    const anyCategory = newValue.find((v) => v.name=== "any");
    const changedProperty = differenceWith(newValue, oldValue, isEqual)[0];
    if(newValue.every((v) => v.value === false)) {
      changedProperty.value = !changedProperty.value;
      this.categories.patchValue(newValue)
      return; 
    }


    if(anyCategory?.value === true) {
      if(changedProperty?.name != "any" && changedProperty?.value === true) {
        anyCategory.value = false;
      }  else  {
        newValue.filter((v) => v.name != "any").forEach((v) => {
          v.value = false});
      }

      this.categories.setValue(newValue, {
        emitEvent: false
      });
    }




  }

  onTypeChange(e: any) {
    const noneIsChecked = (this.type.value as any[]).every((v) => v.value === false)    


    noneIsChecked && this.type.controls.forEach((v) => {
      if(v.value.name === e.target.id) {
        v.patchValue({
          value: true
        })
        this.oneTypeInputIsChecked = noneIsChecked;
      }
    })

    if(!noneIsChecked) {
      this.oneTypeInputIsChecked = false;
    }


  }

  //#endregion

  handleFormSubmit(_value: any) {
    if(this.form.invalid) {
      
      return;
    }

    Object.keys(_value).forEach((key) => {
      const currentValue = _value[key]
      if(Array.isArray(currentValue)){ 
        _value[key] = currentValue.reduce((result: any, item) => {
          if(!item.value) {
            return result;
          }
          result[item.name] = true;
          return result;
        }, {});
        return;
      }


    })

    this.onFormSubmit.emit(_value);   
  }

  patchFormValue(_e: any, options?: {
    onlySelf?: boolean | undefined;
    emitEvent?: boolean | undefined;
  } ) {
    const keys = Object.keys(_e);
    if(keys.length < 0) {
      return;
    }
    const valueToSet = cloneDeep(_e)

    const formValuesCopy = cloneDeep(this.form.value);

    Object.keys(formValuesCopy).forEach((key) => {
      if(!valueToSet[key]) {
        return;
      }

      const currentProp = formValuesCopy[key];


      if(key.toLowerCase() == "type") {
        const typePropertyKeys = Object.keys(valueToSet.type);
        currentProp.forEach((v: any) => {
          v.value = typePropertyKeys.includes(v.name);
        });
        return;
      }

      if(Array.isArray(currentProp)) {
        const indexes = currentProp.reduce((res: number[], item: any, index: number) => {
            valueToSet?.[key]?.[item?.name] && res.push(index);
            return res;
          }, []); 
          indexes.forEach((e: any) => {
            const currentItem = currentProp[e];
            currentItem.value = true;
          });
          return;
      }

      

      formValuesCopy[key] = valueToSet[key];
    })

    this.form.setValue(formValuesCopy)

  }

}
function commaToObject(value: string, defaultValue:any=true) {
  return value.split(",").reduce((result, item) => {
    result[item] = defaultValue;
    return result;
  }, {} as any);
}
function parseFiltersToFormValues(_v: Keyable) {
  const v = cloneDeep(_v)
  const output = [
    "blacklistFlags",
    "categories",
    "idRange",
    "type"
  ].reduce((result: any, item) => {
    const currentItem = v[item];
    if(currentItem == null) {
      return result;
    }

    result[item] = Object.keys(currentItem).reduce((_r: any[], _i) => {
      _r.push({
        name: _i,
        value: currentItem[_i]
      })
      return _r;
    }, []);

    return result;
  }, {})


  return output;
}