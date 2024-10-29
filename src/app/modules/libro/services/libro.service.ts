import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facultad } from 'src/app/models/editorial';
import { Libr } from 'src/app/models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  public apiUrl = 'http://localhost:8000/api/escuela';
  public editorialesUrl = 'http://localhost:8000/api/facultad';

  constructor(public http: HttpClient) {}

  agregarEscuela(escuela: Libr): Observable<Libr> {
    return this.http.post<Libr>(`${this.apiUrl}/InsertEscu`, escuela);
  }

  obtenerFacultades(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(`${this.editorialesUrl}/ListFacul`);
  }

  listarEscuelas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ListEscu`);
  }

  eliminarEscuela(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteEscu/${id}`);
  }

  actualizarEscuela(id: number, escuela: Libr): Observable<Libr> {
    return this.http.put<Libr>(`${this.apiUrl}/EdidEscu/${id}`, escuela);
  }
}
