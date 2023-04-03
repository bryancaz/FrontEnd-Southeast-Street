import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from "../../services/auth-user.service";
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  
  registrar: FormGroup;

  constructor(
    private _router: Router,
    private _AuthService: AuthUserService
  ) { 

    this.registrar = new FormGroup({
      // nombre: new FormControl('', Validators.required),
      // apellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  }

  ngOnInit(): void {
  }

  registrarUsuario() {
       const data = {
       // nombre: this.registrar.value.nombre,
        //apellido: this.registrar.value.apellido,
        email: this.registrar.value.email,
        password:this.registrar.value.password
      }

      try {
        this._AuthService.registrarUser(data).subscribe({
          next: (data) => {
            console.log(data);
            
            alert("Usuario Registrado Correctamente")
            this.registrar.reset();
            this._router.navigate(['/login'])
          },
          error: (err) => {
            alert( err.error.msj)
          }
        })
      } catch (error) {
         alert(error);         
      }
    }
  

}
