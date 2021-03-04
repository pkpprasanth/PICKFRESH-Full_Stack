import { Injectable } from '@angular/core';
import { Crop } from './../model/crop';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KitsService {

  private url = 'http://localhost:8080/pickfresh/kits';
  constructor(private http: HttpClient) { }


  getAllKits(): Observable<any> {
    return this.http.get(`${this.url}/retrieveKits`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }

  getKitById(id: number): Observable<any> {
    return this.http.get(`${this.url}/retrieveKits/kitById/${id}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }

  getKitsByCategory(name: string): Observable<any> {
    return this.http.get(`${this.url}/retrieveKits/kitsByCategory/${name}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  /*
    getCropByName(name: string): Observable<any> {
      return this.http.get(`${this.url}/retrieveCropByName/${name}`).pipe(tap(data =>
        data), catchError(this.errorHandler));
    }


    getplaceByPackage(package: any): Observable<any> {
      return this.http.get(`${this.url}/retrivePlaces/${packeage}`).pipe(tap(data =>
        data), catchError(this.errorHandler));
    }


    getplaceByType(placeType: string): Observable<any> {
      return this.http.get(`${this.url}/retriveplaceType/${placeType}`).pipe(tap(data =>
        data), catchError(this.errorHandler));
    }


    getplaceBySeason(season: string): Observable<any> {
      return this.http.get(`${this.url}/retriveBySeason/${season}`).pipe(tap(data =>
        data), catchError(this.errorHandler));
    }


    getplaceBewteenPackage(start: any, end: any): Observable<any> {
      return this.http.get(`${this.url}/retrivebetweenpackage/start/${start}/between/end/${end}`).pipe(tap(data =>
        data), catchError(this.errorHandler));
    }

    getplaceSubType(subtype: string): Observable<any> {
      return this.http.get(`${this.url}/retriveSubplaceType/${subtype}`).pipe(tap(data =>
        data), catchError(this.errorHandler));
    }


    getplaceByRating(rating: number): Observable<any> {
      return this.http.get(`${this.url}/retriveRating/${rating}`).pipe(tap(data =>
        data), catchError(this.errorHandler));
    }


    getplacePackageGreterThanEqual(value: number): Observable<any> {
      return this.http.get(`${this.url}/retriveplacePackageGreaterThanEqual/${value}`).pipe(tap(data =>
        data), catchError(this.errorHandler));
    }


    getplacePackageLessThanEqual(value: number): Observable<any> {
      return this.http.get(`${this.url}/retriveplacePackageLessThanEqual/${value}`).pipe(tap(data =>
        data), catchError(this.errorHandler));
    }
  */

  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
