import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from 'src/app/services/Notes/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {
  status: boolean = true;
  Title: string = "";
  TakeNote: string = "";

  @Output() updateData = new EventEmitter();
  constructor(private note: NotesService) { }

  handleTakeNote() {
    this.status = false;
  }
  handleAddNote() {
    let noteData = {
      title: this.Title,
      takeNote: this.TakeNote
    }
    this.status = true;
    if (this.Title == "" && this.TakeNote == "") return
    this.note.addNote(noteData).subscribe((response)=>{
      console.log(response);
    })
    this.updateData.emit({data:noteData,action:'add'});
    this.Title=""
    this.TakeNote=""
  }
}
