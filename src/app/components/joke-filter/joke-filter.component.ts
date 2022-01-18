import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AnyTypeJoke, isMultipleJokes, Joke, MultipleJokes } from 'src/app/misc/joke.model';
import { JokeHttpService, JokeUrlParams } from 'src/app/services/joke-http-service/joke-http.service';
@Component({
  selector: 'app-joke-filter',
  templateUrl: './joke-filter.component.html',
  styleUrls: ['./joke-filter.component.scss']
})
export class JokeFilterComponent implements OnInit {

  form!: FormGroup;

  joke!: Observable<AnyTypeJoke | MultipleJokes>;

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

  constructor(private http: JokeHttpService, private fb : FormBuilder, private _ar: ActivatedRoute, private _router: Router) { }


  ngOnInit(): void {
    this._ar.queryParams.subscribe((v) => {
      

      const keysToCheck = [
        "categories",
        "amount",
        "idRange",
        "blacklistFlags",
        "type",
        "contains",
      ];

      const formValuesFromUrl = keysToCheck.reduce((result: any, item) => {
        if(v[item] == null || v[item] === "") {
          return result;
        }
        result[item] = v[item]?.toLowerCase();
        return result;
      }, {});

      const keysOfFormValues = Object.keys(formValuesFromUrl);
      const commaSeperatedKeys = keysOfFormValues.filter((v) => v != "contains" && v != "idRange" && v != "amount")

      commaSeperatedKeys.forEach((key) => {
        const currentItem = formValuesFromUrl[key];
        
        formValuesFromUrl[key] = commaToObject(currentItem);
      })

      if(formValuesFromUrl.idRange) {
        const [min, max] = (formValuesFromUrl?.idRange as string)?.split("-");
        formValuesFromUrl.idRange = {
          min,
          max,
          oneNumber: min == max
        }        
      }


      this.form = this.fb.group({
        
        categories: this.fb.array(
          createCategoriesArray.bind(this)()
        ),
        language: 'english',
        blacklistFlags: this.fb.array(createBlacklistFlagsArray.bind(this)()),
        type: this.fb.array(createTypesArray.bind(this)()), 
        idRange: this.fb.group({
          min: formValuesFromUrl.idRange?.min || null,
          max: formValuesFromUrl.idRange?.max || null,
          oneNumber: formValuesFromUrl.idRange?.oneNumber != undefined ? formValuesFromUrl.idRange.oneNumber : true,
        }),
        contains: formValuesFromUrl?.contains || "",
        amount: [formValuesFromUrl?.amount || 1, [Validators.min(1), Validators.max(10)]],

      });
      
      //#region Creation Of Arrays
      function createBlacklistFlagsArray(this: JokeFilterComponent): any[] {
        return [
          {
            name: "nsfw",
            value: doesFlagsPropertyExists("nsfw") ? formValuesFromUrl.blacklistFlags.nsfw : false,
          },
          {
            name: "religious",
            value: doesFlagsPropertyExists("religious") ? formValuesFromUrl.blacklistFlags.religious : false,
          },
          {
            name: "political",
            value: doesFlagsPropertyExists("political") ? formValuesFromUrl.blacklistFlags.political : false,
          },
          {
            name: "racist",
            value: doesFlagsPropertyExists("racist") ? formValuesFromUrl.blacklistFlags.racist : false,
          },
          {
            name: "sexist",
            value: doesFlagsPropertyExists("sexist") ? formValuesFromUrl.blacklistFlags.sexist : false,
          },
          {
            name: "explicit",
            value: doesFlagsPropertyExists("explicit") ? formValuesFromUrl.blacklistFlags.explicit : false,
          },
        ].map((v) => this.fb.group(v));
      }

      function createCategoriesArray(this: JokeFilterComponent): any[] {
        return [
          {
            name: 'any',
            value: doesCategoriesPropertyExists("any") ? formValuesFromUrl.categories.any : true,
          },
          {
            name: 'misc',
            value: doesCategoriesPropertyExists("misc") ? formValuesFromUrl.categories.misc : false,
          },
          {
            name: 'dark',
            value: doesCategoriesPropertyExists("dark") ? formValuesFromUrl.categories.dark : false,
          },
          {
            name: 'programming',
            value: doesCategoriesPropertyExists("programming") ? formValuesFromUrl.categories.programming : false,
          },
          {
            name: 'spooky',
            value: doesCategoriesPropertyExists("spooky") ? formValuesFromUrl.categories.spooky : false,
          },
          {
            name: 'christmas',
            value: doesCategoriesPropertyExists("christmas") ? formValuesFromUrl.categories.christmas : false,
          },
        ].map((v) => {
          return this.fb.group({ ...v });
        });
      }

      function createTypesArray(this: JokeFilterComponent): any[] {
        
        let singleValue = doesTypePropertyExists("single") ? formValuesFromUrl.type.single : (
          doesTypePropertyExists("twopart") ? false :  true
        );
        let twoPartValue = doesTypePropertyExists("twopart") ? formValuesFromUrl.type.twopart : (
          doesTypePropertyExists("single") ? false :  true
        );

      

        return [
          {
            name: "single",
            value: singleValue,
          },
          {
            name: "twopart",
            displayName: "Two Part",
            value: twoPartValue ,
          }
        ].map((v) => this.fb.group(v));
      }
      //#endregion

      function doesTypePropertyExists(s: string){
        return formValuesFromUrl.type?.[s] !== undefined;
      }

      function doesCategoriesPropertyExists(s: string){
        return formValuesFromUrl.categories?.[s] !== undefined;
      }

      function doesFlagsPropertyExists(s: string){
        return formValuesFromUrl.blacklistFlags?.[s] !== undefined;
      }

      function doesIdRangePropertyExists(s: string){
        return formValuesFromUrl.idRange?.[s] !== undefined;
      }

      

      this.categories.valueChanges.subscribe(this.onCategoriesChange.bind(this))

      if(keysOfFormValues.length > 0) {
        this.requestJoke(formValuesFromUrl)
      }


  })
    
  }

  requestJoke(v: {[key: string]: any}) {  
    const categories = Object.keys(v.categories).reduce((result: any[], key) => {
      result.push(key)
      return result;
    }, [] );

    delete v.categories;

    console.log(v, categories)
    this.joke = this.http.getAdvanced(categories, v);
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


  onCategoriesChange(newValue: any[]) {

    const anyCategory = newValue.find((v) => v.name=== "any");

    if(anyCategory.value === true) {
      newValue.filter((v) => v.name != "any").forEach((v) => {
        v.value = false});
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

  onFormSubmit(_value: any) {
    if(this.form.invalid) {
      
      return;
    }
    const value = JSON.parse(JSON.stringify(_value))

    const categories = value.categories.reduce((result: string[], item: any) => {
      item.value === true && result.push(item.name)
      return result;
    }, []).toString()

    delete value.categories;
    value.blacklistFlags = value.blacklistFlags.reduce((result: any[], v: any) => {
      v.value && result.push(v.name)
      return result;
    }, []).toString()

    value.type = value.type.reduce((result: any[], v: any) => {
      v.value && result.push(v.name)
      return result;
    }, []).toString()

    value.idRange = value.idRange.oneNumber ? (value.idRange["min"] || value.idRange["max"] || "null")?.toString() :`${value.idRange["min"]}-${value.idRange["max"]}`

    
    if(value.idRange.toLowerCase().includes("null")) {
      delete value.idRange;
    }

    const valueToSubmit = {categories, ...value}

    this._router.navigate([], {
      relativeTo: this._ar,
      queryParams: valueToSubmit,
      queryParamsHandling: "merge"
    })    

  }

  isMultipleJokes(joke: unknown) : joke is MultipleJokes {
    return isMultipleJokes(joke)
  }

}

function commaToObject(value: string, defaultValue:any=true) {
  return value.split(",").reduce((result, item) => {
    result[item] = defaultValue;
    return result;
  }, {} as any);
}

