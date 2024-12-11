import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import { NotesService } from 'src/app/services/Notes/notes.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent implements OnInit, OnDestroy {

  notesData: any[] = [];
  searchQuery: string = ""
  subcription!: Subscription 

  constructor(private notes: NotesService, private data : DataService) { }

  ngOnInit(): void {
    this.notes.getAllNotes().subscribe((response: any) => {
      console.log(response.data);
      this.notesData = response.data.filter((x:any) => x.isTrash == true);
    })
    this.subcription = this.data.currSearchQuery.subscribe((res)=> this.searchQuery = res)
  }
  updateData: any = []
  handleUpdateNotesData($event: { data: any, action: string }) {
    const { data, action } = $event

    if (action == "delete" || action == "untrash")
      this.notesData = this.notesData.filter((note) => note.noteId != data)
  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }
}
