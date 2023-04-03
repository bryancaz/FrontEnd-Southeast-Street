import { Component, OnInit, Input, Output ,  EventEmitter} from '@angular/core';
import { Product } from "../../models/product.model";
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit
{


@Input() product: Product= {
  id: '' ,
  nombre:'',
  img:'',
  precio: 0,
  descripcion: '',
  mensaje: ''
}

@Output() addProduct= new EventEmitter<Product>()

  constructor(
    private _serviceProduct: ProductsService,
    private _router: Router
    ) { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.addProduct.emit(this.product);
  }

  deleteProduct(id:any){
    try {
      this._serviceProduct.deleteProduct(id).subscribe({
        next:(res)=>{
          alert(res.messaje);
          window.location.reload();          
        },
        error:(err)=>{
          alert(err.err)          
        }
      })
    } catch (error) {
      console.log(error);
      
    }
    
  }
  
  updateProduct(id:string){
    this._router.navigate([`/update/${id}`])
  }

}
