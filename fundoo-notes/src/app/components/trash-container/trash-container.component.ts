import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/Notes/notes.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent implements OnInit{
  
  notesData:any[]=[];

  constructor(private notes : NotesService){ }

  ngOnInit(): void {
    this.notes.getAllNotes().subscribe((response:any) =>{
      console.log(response.data);
      this.notesData = response.data.filter((x:{isArchive:boolean; isTrash:boolean}) => x.isArchive == false && x.isTrash == true);
    })
  }
}
