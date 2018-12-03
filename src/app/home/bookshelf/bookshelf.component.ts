import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewBookComponent } from './new-book/new-book.component';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onCreateBookClick() {
    this.dialog.open(NewBookComponent, {
      width: '500px'
    });
  }

}
