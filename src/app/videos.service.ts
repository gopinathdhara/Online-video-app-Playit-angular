import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { CommonData } from './comon/comondata';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  
  public accesstoken="";
  public url = "";
  public url1 = "";
  public url2 = CommonData.baseUrl+'api/video';
  public url3= CommonData.baseUrl+'api/allvideos';

  constructor(private httpClient: HttpClient) { }
  
  getMyVideosListService():Observable<any>{

    this.accesstoken=localStorage.getItem("accesstoken"); 
    this.url=CommonData.baseUrl+'api/videos?token='+this.accesstoken;
    return this.httpClient.get<any>(this.url).pipe(
      catchError(this.handleError)
      );
  } 
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  } 
  insertMyVideosListService(title:string,description:string,url:string):Observable<any>{

    this.accesstoken=localStorage.getItem("accesstoken");
    this.url1=CommonData.baseUrl+'api/video?token='+this.accesstoken;
    let formdata={
      'title':title,'description':description,'url':url
    };
    return this.httpClient.post<any>(this.url1,formdata).pipe(
      catchError(this.handleError)
      );;
  }
  getSingleVideoListService(videoId):Observable<any>{

    this.accesstoken=localStorage.getItem("accesstoken");
    let newUrl2=this.url2+"/"+videoId+"?token="+this.accesstoken;
    return this.httpClient.get<any>(newUrl2).pipe(
      catchError(this.handleError)
      );
  } 
  updateMyVideosListService(title:string,description:string,url:string,videoId:string):Observable<any>{
    
    this.accesstoken=localStorage.getItem("accesstoken");
    let newUrl3=this.url2+"/"+videoId+"?token="+this.accesstoken;
    let formdata={
      'title':title,'description':description,'url':url
    };
    return this.httpClient.put<any>(newUrl3,formdata).pipe(
      catchError(this.handleError)
      );;
  }
  deleteMyVideoService(videoId:string):Observable<any>{
    this.accesstoken=localStorage.getItem("accesstoken");
    let newUrl3=this.url2+"/"+videoId+"?token="+this.accesstoken;
    let formdata={
      
    };
    return this.httpClient.delete<any>(newUrl3,formdata).pipe(
      catchError(this.handleError)
      );;
  }
  getAllVideosListService():Observable<any>{
    return this.httpClient.get<any>(this.url3).pipe(
      catchError(this.handleError)
      );
  } 
}
