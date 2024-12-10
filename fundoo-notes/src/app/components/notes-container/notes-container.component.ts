import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/Notes/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  notesData: any[] = [];

  constructor(private notes: NotesService) { }

  ngOnInit(): void {
    this.notes.getAllNotes().subscribe((response: any) => {
      console.log(response.data);
      this.notesData = response.data.filter((x: { isArchive: boolean; isTrash: boolean }) => x.isArchive == false && x.isTrash == false);
    })
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
}
