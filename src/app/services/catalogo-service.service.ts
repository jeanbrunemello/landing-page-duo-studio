import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoServiceService {

 private API = 'http://localhost:3000/catalogos' ;


  constructor(private http: HttpClient) { }

  getAllCatalogos() {
    return this.http.get(this.API);
  }

  getCatalogoById(id:number){
    const urlToGet = `${this.API}/${id}`
    return this.http.get(urlToGet)
  }



}
