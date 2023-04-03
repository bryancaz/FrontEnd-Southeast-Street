import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";

import {StoreService} from '../../services/store.service'
import {ProductsService} from '../../services/products.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  user:any = localStorage.getItem("user");

  myshoppingCart:Product[] = [] ;
  total = 0;

   products:Product[] = []


  constructor(
    private storeService: StoreService,
    private productsService: ProductsService,
    private _router: Router
  )
  {
    this.myshoppingCart = this.storeService.getShoppingCart()
   }

  ngOnInit(): void {
     this.productsService.getAllProducts()
     .subscribe(data =>{
       this.products = data;
    // //  this.products;
      });
  }

  onAddToShoppingCart(product:Product){

  this.storeService.AddProduct(product)

  this.total = this.storeService.getTotal();
}

}
