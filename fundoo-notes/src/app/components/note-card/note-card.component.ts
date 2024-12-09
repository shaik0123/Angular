import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from 'src/app/services/Notes/notes.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {

  @Input() noteCardData:any=[];
  @Input() container:string="";
  @Output() updateData = new EventEmitter()
  constructor(private note: NotesService) { }

  handleIconsActions(action: string){
    const noteId = this.noteCardData.noteId;
    switch(action){
      case 'delete':
        console.log(action,noteId);
        // this.note.deleteNote(noteId).subscribe((response)=>{
        //   console.log(response);
        // })
        this.updateData.emit({data:noteId,action})
        break;
      case 'archive':
        console.log(action);
        this.note.archiveNote(noteId).subscribe((response)=>{
          console.log(response);
        })
        this.updateData.emit({data:noteId,action})
        break;
      case 'unarchive':
        console.log(action);
        this.note.unarchiveNote(noteId).subscribe((response)=>{
          console.log(response);
        })
        this.updateData.emit({data:noteId,action})
        break;
      case 'trash':
        console.log(action);
        // this.note.trashNote(noteId).subscribe((response)=>{
        //   console.log(response);
        // })
        this.updateData.emit({data:noteId,action})
        break;
      default:
        console.log(action);  
    }
    
  }

  handleIconsClick(action:string){
    const noteId = this.noteCardData.noteId;
    console.log(noteId,action);
    this.note.addColor(noteId,action).subscribe((response)=>{
      console.log(response);
    })
    
  }
}
