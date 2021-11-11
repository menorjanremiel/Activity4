import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = this.fb.group({
    email: ['',Validators.email],
    password: ['',Validators.required],
  });
 //username = new FormControl('');
// password = new FormControl('');

  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
    
     }
}
