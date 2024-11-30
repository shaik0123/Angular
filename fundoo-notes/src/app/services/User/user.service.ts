import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService) { }

  login(reqData: any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json', 
      })
    }
    return this.httpService.postService('https://localhost:44353/api/User/Login',reqData,false,header);
  }
}
