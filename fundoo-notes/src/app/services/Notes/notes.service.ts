import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService : HttpService) { }

  getAllNotes(){
    let headers = new HttpHeaders({
        'Content-type':'application.json',
        'Authorization':'Bearer '+localStorage.getItem('token')
    })
    return this.httpService.getService("https://localhost:44353/api/Note/AllNotes",{headers : headers})
  }
}
