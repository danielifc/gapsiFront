import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, PAGE_SIZE } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresDataService {

  constructor(
    private http: HttpClient
  ) { }

  getProveedores(page: number){
    return this.http.get<any>(`${API_URL}/proveedores?page=${page}&size=${PAGE_SIZE}`);
  }

  saveProveedor(proveedor: Proveedor){
    return this.http.post(`${API_URL}/proveedores`, proveedor);
  }

  deleteProveedor(id: number){
    return this.http.delete(`${API_URL}/proveedores/${id}`);
  }

}

export class Proveedor{

  constructor(
    public id: number,
    public nombre: string,
    public razonSocial: string,
    public direccion: string
  ){}

}