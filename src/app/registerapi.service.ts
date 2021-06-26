import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonData } from './comon/comondata';
@Injectable({
  providedIn: 'root'
})
export class RegisterapiService {
  private url = CommonData.baseUrl+'api/users/signup';

  constructor(private httpClient: HttpClient) { }

  registerationApiService(name:string,email:string,password:string):Observable<any>{
    let formdata={
      'name':name,'email':email,'pass1':password
    };
    return this.httpClient.post<any>(this.url,formdata);
  }
}
