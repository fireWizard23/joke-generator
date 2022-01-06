import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  oneTypeIsChecked = false;

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



  constructor(private http: JokeHttpService, private fb : FormBuilder) { }


  ngOnInit(): void {
    
    this.form = this.fb.group({
      
      categories: this.fb.array(
        [
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
          return this.fb.group({...v})
        })
      ),
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
            value: true,
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
    



  }

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


  onCategoriesChange(e: any) {

    const value = this.categories.value.reduce((result: any, v: any) => {
      result[v.name] = v.value;
      return result;
    }, {});

    if(e.target.id != 'any') {
      if(value.any === true) {
        this.categories.controls.forEach((v) => {
          v.patchValue({
            value: v.value.name == 'any' ? false : v.value.value,
          })
        })
      }
      return;
    }
      
      if(value.any === true) {
        this.categories.controls.forEach((v) => {
          v.patchValue({
            value: v.value.name != 'any' ? false : true,
          })
        })
      }
    }

  onTypeChange(e: any) {
    const noneIsChecked = (this.type.value as any[]).every((v) => v.value === false)    


    noneIsChecked && this.type.controls.forEach((v) => {
      if(v.value.name === e.target.id) {
        v.patchValue({
          value: true
        })
        this.oneTypeIsChecked = noneIsChecked;
      }
    })

    if(!noneIsChecked) {
      this.oneTypeIsChecked = false;
    }


  }
  
  onFormSubmit(_value: any) {
    if(this.form.invalid) {
      console.log("THE FORM IS INVALID!")
      return;
    }
    const value = JSON.parse(JSON.stringify(_value))
    
    const categories = value.categories.reduce((result: string[], item: any) => {
      item.value === true && result.push(item.name)
      return result;
    }, [])

    delete value.categories;

    value.blacklistFlags = value.blacklistFlags.reduce((result: any, v: any) => {
      result[v.name ] = v.value;
      return result;
    }, {})

    value.type = value.type.reduce((result: any, v: any) => {
      result[v.name] = v.value;
      return result;
    }, {})

    value.idRange = value.idRange.oneNumber ? (value.idRange["min"] || value.idRange["max"] || "null")?.toString() :`${value.idRange["min"]}-${value.idRange["max"]}`

    console.log(value.idRange, typeof value.idRange)
    if(value.idRange.toLowerCase().includes("null")) {
      delete value.idRange;
    }
    console.log(value)
    this.joke = this.http.getAdvanced(categories, value)
  }

  isMultipleJokes(joke: unknown) : joke is MultipleJokes {
    return isMultipleJokes(joke)
  }

}
