import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AnyTypeJoke, Joke, MultipleJokes } from 'src/app/misc/joke.model';
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
      type: 
        this.fb.array([
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

    });

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


  }
  
  onFormSubmit(value: any) {
    console.log(value)
    
    const categories = value.categories.reduce((result: string[], item: any) => {
      item.value === true && result.push(item.name)
      return result;
    }, [])

    console.log(categories)

    value.blacklistFlags = Object.keys(value.blacklistFlags).reduce((result: any, v: any) => {
      result[v.name ] = v.value;
      return result;
    }, {})


    this.joke = this.http.getAdvanced(categories, value)
  }

}
