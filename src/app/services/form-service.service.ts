import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  private formAPI = 'http://localhost:3000/contato/';

  constructor(private http: HttpClient) { }
  id = 0
  getAllContatos() {
    return this.http.get(this.formAPI);
  }

  enviarFormulario(formulario: any) {
    this.id = this.id + 1
    formulario.id = this.id
    return this.http.post(this.formAPI, formulario);
  }
}
