import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  
  public accesstoken=localStorage.getItem("accesstoken");

  public url = 'http://localhost:3000/api/videos?token='+this.accesstoken;
  public url1 = 'http://localhost:3000/api/video?token='+this.accesstoken;
  public url2 = 'http://localhost:3000/api/video';
  public url3= 'http://localhost:3000/api/allvideos';

  constructor(private httpClient: HttpClient) { }

  getMyVideosListService():Observable<any>{
    return this.httpClient.get<any>(this.url).pipe(
      catchError(this.handleError)
      );
  } 
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  } 
  insertMyVideosListService(title:string,description:string,url:string):Observable<any>{
    let formdata={
      'title':title,'description':description,'url':url
    };
    return this.httpClient.post<any>(this.url1,formdata).pipe(
      catchError(this.handleError)
      );;
  }
  getSingleVideoListService(videoId):Observable<any>{
    let newUrl2=this.url2+"/"+videoId+"?token="+this.accesstoken;
    return this.httpClient.get<any>(newUrl2).pipe(
      catchError(this.handleError)
      );
  } 
  updateMyVideosListService(title:string,description:string,url:string,videoId:string):Observable<any>{
    let newUrl3=this.url2+"/"+videoId+"?token="+this.accesstoken;
    let formdata={
      'title':title,'description':description,'url':url
    };
    return this.httpClient.put<any>(newUrl3,formdata).pipe(
      catchError(this.handleError)
      );;
  }
  deleteMyVideoService(videoId:string):Observable<any>{
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
