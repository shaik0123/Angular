import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  submited:boolean= false;
  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern(/^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/)]],
      password: ['', [Validators.required, Validators.pattern(/^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/)]]
    })
  }
  get loginControls() {return this.loginForm.controls}
  onSubmit() {
    const { status, value} = this.loginForm;
    this.submited = true;
    console.log(status,value,this.loginForm);
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      if(status == "INVALID") return
      this.user.login(reqData).subscribe((response: any) => {
        console.log(response.data);
        localStorage.setItem('token', response.data);
        this.router.navigate(['/dashboard/notes'])
      })
  }
}
