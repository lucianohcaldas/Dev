import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
    private baseUrl = 'http://localhost:8080/embracon/colaborador';

  constructor(private http: HttpClient) { }

 getColaborador(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

    // tslint:disable-next-line: ban-types
    colaboradorAdd(colaborador: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, colaborador);
  }

  // tslint:disable-next-line: ban-types
  colaboradorUpdate(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  colaboradorDelete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getColaboradorList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
