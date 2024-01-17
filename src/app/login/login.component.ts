import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){}

  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })
  login(){
    if(this.loginForm.valid){
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password
      const user ={email,password}
      this.api.login(user).subscribe({
        next:(response:any)=>{
          sessionStorage.setItem('token',response.token)
          alert("Login Successfull...")
          this.router.navigateByUrl('')
        },
        error:(data:any)=>{
          alert(data.error)
        }
      })
    }
    else{
      alert("Invalid Form")
    }
  }
}
