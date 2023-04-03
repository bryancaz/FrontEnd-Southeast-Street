import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

 private _urlApi = environment.url_api;

  constructor(
    private _http :HttpClient,
  ) { }

  registrarUser(data:object):Observable<any>{
    const url = `${this._urlApi}/auth/signup`
    return this._http.post<any>(url, data)
  }
    
  login(data:object):Observable<any>{
    const url = `${this._urlApi}/auth/login`
    return this._http.post<any>(url, data)
  }

}

