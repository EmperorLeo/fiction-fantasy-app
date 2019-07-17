import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewBookComponent } from './new-book/new-book.component';
import { BookService } from '../../core/book.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private dialog: MatDialog, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooksForUser();
  }

  onCreateBookClick() {
    const dialogRef = this.dialog.open(NewBookComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(bookId => {
      this.router.navigate(["editor", bookId]);
    });
  }

}
