import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Empregado } from 'src/model/empregado';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/empregados';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEmpregados (): Observable<Empregado[]> {
    return this.http.get<Empregado[]>(apiUrl)
      .pipe(
        tap(empregados => console.log('leu os empregados')),
        catchError(this.handleError('getEmpregados', []))
      );
  }

  getEmpregado(id: number): Observable<Empregado> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Empregado>(url).pipe(
      tap(_ => console.log(`leu o empregado id=${id}`)),
      catchError(this.handleError<Empregado>(`getEmpregado id=${id}`))
    );
  }

  addEmpregado (empregado): Observable<Empregado> {
    return this.http.post<Empregado>(apiUrl, empregado, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((empregado: Empregado) => console.log(`adicionou o empregado com w/ id=${empregado.id}`)),
      catchError(this.handleError<Empregado>('addEmpregado'))
    );
  }

  updateEmpregado(id, empregado): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, empregado, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${id}`)),
      catchError(this.handleError<any>('updateEmpregado'))
    );
  }

  deleteEmpregado (id): Observable<Empregado> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Empregado>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o empregado com id=${id}`)),
      catchError(this.handleError<Empregado>('deleteEmpregado'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
