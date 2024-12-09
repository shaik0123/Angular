import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  constructor(private httpService : HttpService) { }

  authHeaders(){
    let headers = new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+localStorage.getItem('token')
  })
  return headers;
  }
  addNote(noteData:any){
  return this.httpService.addNoteService("https://localhost:44353/api/Note/Note",noteData,{headers : this.authHeaders()})
  }
  getAllNotes(){
    return this.httpService.getService("https://localhost:44353/api/Note/AllNotes",{headers : this.authHeaders()})
  }
  deleteNote(noteId:number){
    return this.httpService.deleteNoteService(`https://localhost:44353/api/Note/Note?id=${noteId}`,{headers : this.authHeaders()})
  }
  archiveNote(noteId:number){
    return this.httpService.patchNoteService(`https://localhost:44353/api/Note/Archive?id=${noteId}`,"",{headers : this.authHeaders()})
  }
  unarchiveNote(noteId:number){
    return this.httpService.patchNoteService(`https://localhost:44353/api/Note/UnArchive?id=${noteId}`,"",{headers : this.authHeaders()})
  }
  trashNote(noteId:number){
    return this.httpService.patchNoteService(`https://localhost:44353/api/Note/Trash?id=${noteId}`,"",{headers : this.authHeaders()})
  }
  addColor(noteId:number,colour:string){
    let encodedColour = encodeURIComponent(colour);
    return this.httpService.patchNoteService(`https://localhost:44353/api/Note/Colour?id=${noteId}&colour=${encodedColour}`,"",{headers : this.authHeaders()})
  }
}
