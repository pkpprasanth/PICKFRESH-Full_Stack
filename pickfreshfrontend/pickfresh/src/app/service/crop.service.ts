import { Injectable } from '@angular/core';
import { Crop } from './../model/crop';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CropService {
  private url = 'http://localhost:8080/pickfresh/crop';
  constructor(private http: HttpClient) {}

  getAllCrop(): Observable<any> {
    return this.http.get(`${this.url}/retrieveCrops`).pipe(
      tap((data) => data),
      catchError(this.errorHandler)
    );
  }

  getCropById(id: number): Observable<any> {
    return this.http.get(`${this.url}/retrieveCropById/cropById/${id}`).pipe(
      tap((data) => data),
      catchError(this.errorHandler)
    );
  }

  getCropCategory(name: string): Observable<any> {
    return this.http.get(`${this.url}/retrieveCropByCategory/${name}`).pipe(
      tap((data) => data),
      catchError(this.errorHandler)
    );
  }

  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
