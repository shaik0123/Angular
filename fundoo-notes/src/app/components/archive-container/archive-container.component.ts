import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import { NotesService } from 'src/app/services/Notes/notes.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit, OnDestroy {

  notesData: any[] = [];
  searchQuery: string = ""
  subcription!: Subscription

  constructor(private notes: NotesService, private data : DataService) { }

  ngOnInit(): void {
    this.notes.getAllNotes().subscribe((response: any) => {
      console.log(response.data);
      this.notesData = response.data.filter((x: { isArchive: boolean; isTrash: boolean }) => x.isArchive == true && x.isTrash == false);
    })
    this.subcription = this.data.currSearchQuery.subscribe((res)=>this.searchQuery = res)
  }
  updateData: any = []
  handleUpdateNotesData($event: { data: any, action: string }) {
    const { data, action } = $event

    if (action == "unarchive" || action == "trash")
      this.notesData = this.notesData.filter((note) => note.noteId != data)
  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }
}
