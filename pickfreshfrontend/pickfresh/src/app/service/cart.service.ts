import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { CartGetSet } from './../model/cartGetSet';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private url = 'http://localhost:8080/pickfresh/order';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) {}

  createOrder(order: any): Observable<CartGetSet> {
    console.log(JSON.stringify(order) + 'service');

    return this.http
      .post<CartGetSet>(`${this.url}/placeOrder`, order)
      .pipe(
        tap((data) => data),
        catchError(this.errorHandler)
      );
  }

  updateOrder(id: number, order: any): Observable<any> {
    const url = this.url + '/updateById/' + id;
    return this.http.put<CartGetSet>(url, order, this.httpOptions).pipe(
      tap((data) => data),
      catchError(this.errorHandler)
    );
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.url}/deleteById/${id}`).pipe(
      tap((data) => data),
      catchError(this.errorHandler)
    );
  }

  getAllOrders(): Observable<any> {
    return this.http.get<any[]>(`${this.url}/retriveOrders`).pipe(
      tap((data) => data),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse): Observable<any> {
    return observableThrowError(error.message || 'Server Error');
  }
}


