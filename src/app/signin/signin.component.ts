import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
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
