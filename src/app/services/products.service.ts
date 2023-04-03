import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _urlApi = environment.url_api;

  constructor(
    private _http: HttpClient,
  ) { }

  getAllProducts(): Observable<Product[]> {
    const url = `${this._urlApi}/products`
    return this._http.get<Product[]>(url);
  }
  
  getproductId(idproduct:string) :Observable<Product[]> {
    const url = `${this._urlApi}/products/${idproduct}`
    return this._http.get<Product[]>(url);
  }

  agregarProductos(product: object): Observable<Product> {
    const url = `${this._urlApi}/products/add-product`
    return this._http.post<Product>(url, product)
  }

  updateProduct(idProduct:string, product: object): Observable<Product> {
    const url = `${this._urlApi}/products/update/${idProduct}`
    return this._http.put<Product>(url, product)
  }

  deleteProduct(idProduct:string): Observable<any>{
    const url = `${this._urlApi}/products/delete/${idProduct}`
    return this._http.delete<any>(url)
  }
}
