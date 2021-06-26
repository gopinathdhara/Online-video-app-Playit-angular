import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { CommonData } from './comon/comondata';

@Injectable({
  providedIn: 'root'
})
export class LoginapiService {

  private url = CommonData.baseUrl+'api/users/signin';

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
