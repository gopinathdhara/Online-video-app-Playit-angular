import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterapiService {
  private url = 'http://localhost:3000/api/users/signup';

  constructor(private httpClient: HttpClient) { }

  registerationApiService(name:string,email:string,password:string):Observable<any>{
    let formdata={
      'name':name,'email':email,'pass1':password
    };
    return this.httpClient.post<any>(this.url,formdata);
  }
}
