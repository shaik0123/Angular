import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/Notes/notes.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit {

  notesData:any[]=[];

  constructor(private notes : NotesService){ }

  ngOnInit(): void {
    this.notes.getAllNotes().subscribe((response:any) =>{
      console.log(response.data);
      this.notesData = response.data.filter((x:{isArchive:boolean; isTrash:boolean}) => x.isArchive == true && x.isTrash == false);
    })
  }
}
