import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  registerForm! : FormGroup
  constructor(private formbuilder:FormBuilder,private user:UserService) {}
  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : ['']
    })
  }
  onSubmit(){
    let reqData = {
      firstName : this.registerForm.value.firstName,
      lastName : this.registerForm.value.lastName,
      email : this.registerForm.value.email,
      password :this.registerForm.value.password
    }
    // this.user.register(reqData).subscribe((response) => {
    //   console.log(response);

    // })
  }
}
