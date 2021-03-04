import { Injectable } from '@angular/core';
import { Crop } from './../model/crop';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private url = 'http://localhost:8080/pickfresh/food';
  constructor(private http: HttpClient) { }


  getAllFood(): Observable<any> {
    return this.http.get(`${this.url}/retriveFood`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }

  getFoodById(id: number): Observable<any> {
    return this.http.get(`${this.url}/retriveFood/foodById/${id}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }

  getFoodByCategory(name: string): Observable<any> {
    return this.http.get(`${this.url}/retrieveFoodCategory/${name}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }

  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
