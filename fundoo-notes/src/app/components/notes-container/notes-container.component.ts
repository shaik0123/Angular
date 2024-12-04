import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/Notes/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  notesData:any[]=[];

  constructor(private notes : NotesService){ }

  ngOnInit(): void {
    this.notes.getAllNotes().subscribe((response:any) =>{
      console.log(response.data);
      this.notesData = response.data.filter((x:{isArchive:boolean; isTrash:boolean}) => x.isArchive == false && x.isTrash == false);
    })
  }
}
