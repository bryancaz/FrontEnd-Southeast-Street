import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  formProduct: FormGroup

  constructor(
    private _products: ProductsService,
    private _router: Router
  ) {
    this.formProduct = new FormGroup({
      nombre: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  addProduct() {
    const data = this.formProduct.value
    try {
      this._products.agregarProductos(data).subscribe({
        next: (data) => {
          alert(data.mensaje)
          this._router.navigate(['/home'])                    
        },
        error: (error) => {
          alert(error.error.msgError);
        }
      })
    } catch (error) {
      console.log(error); 
    }
  }
}
