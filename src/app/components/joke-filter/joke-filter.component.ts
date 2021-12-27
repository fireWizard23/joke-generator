import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Joke } from 'src/app/misc/joke.model';
import { JokeHttpService, JokeUrlParams } from 'src/app/services/joke-http-service/joke-http.service';

@Component({
  selector: 'app-joke-filter',
  templateUrl: './joke-filter.component.html',
  styleUrls: ['./joke-filter.component.scss']
})
export class JokeFilterComponent implements OnInit {

  myForm!: FormGroup;
  
  joke!: Observable<Joke>

  constructor(private fb: FormBuilder, private http: JokeHttpService) { }



  ngOnInit(): void {
    this.myForm = this.fb.group({
      type: ['any', Validators.required],
      amount: [1, [Validators.required, Validators.min(1), Validators.max(300)]]
    })

  }

  handleSubmit() {
    if(!this.myForm.valid) {
      return  ;
    }
    const value = this.myForm.value;
    this.joke = this.http.getAdvanced('any', value);


  }

}
