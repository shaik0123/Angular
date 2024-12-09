import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/Notes/notes.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit {

  notesData: any[] = [];

  constructor(private notes: NotesService) { }

  ngOnInit(): void {
    this.notes.getAllNotes().subscribe((response: any) => {
      console.log(response.data);
      this.notesData = response.data.filter((x: { isArchive: boolean; isTrash: boolean }) => x.isArchive == true && x.isTrash == false);
    })
  }
  updateData: any = []
  handleUpdateNotesData($event: { data: any, action: string }) {
    const { data, action } = $event

    if (action == "unarchive" || action == "trash")
      this.notesData = this.notesData.filter((note) => note.noteId != data)
  }
}
