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

  addNoteService(url: string, noteData: any,headers:any){
    return this.httpClient.post(url,noteData,headers);
  }

  deleteNoteService(url: string,headers:any){
    return this.httpClient.delete(url,headers);
  }

  patchNoteService(url: string,data:string,headers:any){
    return this.httpClient.patch(url,data,headers);
  }
  
}
