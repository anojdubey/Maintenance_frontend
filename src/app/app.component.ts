import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  signupForm: FormGroup;
  constructor(
    public fb: FormBuilder,
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      password: ['']
    });

  }
  onFormSubmit(){
    console.log(this.signupForm.value)
  }
  ngOnInit(){}
}
