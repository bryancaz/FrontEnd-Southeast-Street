import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  
  constructor(
    private _router: Router,
    private _AuthService: AuthUserService
  ) { 
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  login() {
    const data = {
       email: this.formLogin.value.email,
       password:this.formLogin.value.password
     }
    try {
      this._AuthService.login(data).subscribe({
        next:(data)=>{
          localStorage.setItem('user', data.msj)
          this._router.navigate(['/home'])    
        },
        error: (error) =>{
        alert(error.error.msj)
        
      }
    })
    } catch (error) {
      alert(error)
    }
    
}


}