import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:8080/pickfresh/order';
  constructor(private http: HttpClient) { }

  getOrderDetailsByEmail(email: string): Observable<any> {
    return this.http.get(`${this.url}/retrieveOrder/emailId/${email}`).pipe(
      tap((data) => data),
      catchError(this.errorHandler)
    );
  }
  errorHandler(error: HttpErrorResponse): Observable<any> {
    return observableThrowError(error.message || 'Server Error');
  }
}
