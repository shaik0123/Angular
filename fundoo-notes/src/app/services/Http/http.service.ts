import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient : HttpClient) { }

  postService(url: string, reqData: any, token:boolean=false, httpOptions: any={}){
    return this.httpClient.post(url,reqData,token && httpOptions)
  }
  getService(url: string,headers:any){
    return this.httpClient.get(url,headers);
  }
}
