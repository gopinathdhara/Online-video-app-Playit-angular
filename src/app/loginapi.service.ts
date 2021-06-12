import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginapiService {

  private url = 'http://localhost:3000/api/users/signin';

  constructor(private httpClient: HttpClient) { }

  loginApiService(email:string,password:string):Observable<any>{
    let formdata={
      'email':email,'password':password
    };
    return this.httpClient.post<any>(this.url,formdata).pipe(
      catchError(this.handleError)
      );
  } 
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  } 
}
