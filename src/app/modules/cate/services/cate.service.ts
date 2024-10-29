  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cate } from 'src/app/models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CateService {
  public URL: string = 'http://localhost:8000/api/categorias';
  
  constructor(public http: HttpClient) {}

  public getAllCategoria(): Observable<Cate[]> {
    return this.http.get<Cate[]>(`${this.URL}/ListCate`);
  } 

  public getCategoriaById(id: number): Observable<Cate> {
    return this.http.get<Cate>(`${this.URL}/BuscarCate/${id}`);
  }

  public createCategoria(categoria: Cate): Observable<Cate> {
    return this.http.post<Cate>(`${this.URL}/InsertCate`,categoria);
  }

  public updateCategoria(id: number, categoria: Cate): Observable<Cate> {
    return this.http.put<Cate>(`${this.URL}/EditarCate/${id}`,categoria);
  }

  public deleteCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/DeleteCate/${id}`);
  }
}
