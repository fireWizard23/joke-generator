import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Joke } from 'src/app/misc/joke.model';
import { JokeHttpService, JokeUrlParams } from 'src/app/services/joke-http-service/joke-http.service';

@Component({
  selector: 'app-joke-filter',
  templateUrl: './joke-filter.component.html',
  styleUrls: ['./joke-filter.component.scss']
})
export class JokeFilterComponent implements OnInit {

  form!: FormGroup;

  get categories() {
    return this.form.get('categories') as FormArray;
  }

  get isAnyChecked() {
    return this.categories.value.find((v: any) => v.name === 'any').value;
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
        ].map((v) => {
          return this.fb.group({...v})
        })
      ),
    });

    console.log(this.categories)
  }


  onCategoriesChange(e: any) {

    if(e.target.id != 'any') {
      return;
    }


      const value = this.categories.value.reduce((result: any, v: any) => {
        result[v.name] = v.value;
        return result;
      }, {});
  
      if(value.any === true) {
        this.categories.controls.forEach((v) => {
          v.patchValue({
            value: v.value.name != 'any' ? false : true,
          })
        })
      }
    }
  
  onFormSubmit(value: any) {
    console.log(value)
  }

}
