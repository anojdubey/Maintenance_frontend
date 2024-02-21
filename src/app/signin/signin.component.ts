import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
  signupForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public router :Router
  ) {
    this.signupForm = this.fb.group({
      username: [''],
      password: ['']
    });

  }
  async onFormSubmit(){
    console.log(this.signupForm.value)
    const res= await fetch('http://127.0.0.1:8000/',{
      method:'POST',
      headers:{
        'Content-type':"application/json"
      },
      body:JSON.stringify(this.signupForm.value)
    })
    const data = await res.json();
    console.log(data)
    this.router.navigate(['/home'])
  }
  ngOnInit(){}
}
