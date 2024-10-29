import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facultad } from 'src/app/models/editorial';

@Injectable({
  providedIn: 'root'
})


export class EdiService {
  public URL: string = 'http://localhost:8000/api/facultad';
  
  constructor(private http: HttpClient) {}

  public getAllFacultades(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(`${this.URL}/ListFacul`);
  } 

  public getFacultadById(id: number): Observable<Facultad> {
    return this.http.get<Facultad>(`${this.URL}/BuscarFacul/${id}`);
  }

  public createFacultad(facultad: Facultad): Observable<Facultad> {
    return this.http.post<Facultad>(`${this.URL}/InsertFacul`, facultad);
  }

  public updateFacultad(id: number, facultad: Facultad): Observable<Facultad> {
    return this.http.put<Facultad>(`${this.URL}/EdidFacul/${id}`, facultad);
  }

  public deleteFacultad(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/DeleteFacul/${id}`);
  }
}