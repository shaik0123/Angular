import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import { NotesService } from 'src/app/services/Notes/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit, OnDestroy {

  notesData: any[] = [];
  searchQuery: string = ""
  subscription!: Subscription

  constructor(private notes: NotesService, private data : DataService) { }

  ngOnInit(): void {
    this.notes.getAllNotes().subscribe((response: any) => {
      console.log(response.data);
      this.notesData = response.data.filter((x: { isArchive: boolean; isTrash: boolean }) => x.isArchive == false && x.isTrash == false);
    })
    this.subscription = this.data.currSearchQuery.subscribe((res)=>this.searchQuery = res)
  }
  updateData: any = []
  handleUpdateNotesData($event: { data: any, action: string }) {
    const { data, action } = $event

    if (action == "add")
      this.notesData = [data, ...this.notesData]
    else if (action == "archive" || action == "trash")
      this.notesData = this.notesData.filter((note) => note.noteId != data)
    else if (action == "color")
    this.notesData = this.notesData.map((note) => {
      if (note.noteId == data.noteId) {
        return data
      }
      return note
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
