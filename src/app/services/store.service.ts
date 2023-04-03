import { Injectable } from '@angular/core';
import { Product } from "../models/product.model";

//esta libreria es la que obserba todo dentro de angular y la podemos encontrar en formularios, peticiones http y mas
import {BehaviorSubject  } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

private myshoppingCart:Product[] = [] ;
private myCart = new BehaviorSubject<Product[]>([]);

myCart$= this.myCart.asObservable();

constructor() { }

  AddProduct(product:Product){
    console.log(product);
  this.myshoppingCart.push(product)
  this.myCart.next(this.myshoppingCart);

 }

 getShoppingCart(){
  return this.myshoppingCart;
 }

 getTotal(){
  return this.myshoppingCart.reduce((sum, item) =>
    sum + item.precio, 0);
 }
}
