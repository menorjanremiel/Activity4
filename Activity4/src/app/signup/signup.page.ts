import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm = this.fb.group({
    firstname: ['',Validators.required],
    lastname: [''],
    email: ['',Validators.email],
    password: ['',Validators.required],
  });
  //signupForm = new FormGroup({
  //  firstname: new FormControl(''),
  //  lastname:new FormControl(''),
  //  email: new FormControl(''),
  //  password: new FormControl(''),
 // });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  signin() {
    console.log(this.signupForm.value);
  }
}
