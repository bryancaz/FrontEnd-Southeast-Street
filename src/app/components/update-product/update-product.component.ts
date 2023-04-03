import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  formProduct: FormGroup
  idProduct!:any


  constructor(
    private _products: ProductsService,
    private _router: Router,
    private _route: ActivatedRoute

  ) {
    this._route.paramMap.subscribe(params => {
      this.idProduct = params.get("idProduct");
      this.obtenerProductoId()
    });
    
    this.formProduct = new FormGroup({
      nombre: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  obtenerProductoId(){
    try {
      this._products.getproductId(this.idProduct).subscribe({
        next: (data) => {          
          this.formProduct.patchValue(data)
        },
        error: (error) => {
          alert(error.error.msgError);
        }
      })
    } catch (error) {
      console.log(error); 
    }
  }
  


  updateProduct() {
    const data = this.formProduct.value
    try {
      this._products.updateProduct(this.idProduct, data).subscribe({
        next: (data) => {          
          alert(data.mensaje);
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
