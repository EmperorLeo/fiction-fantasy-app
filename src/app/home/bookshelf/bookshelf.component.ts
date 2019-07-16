import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewBookComponent } from './new-book/new-book.component';
import { BookService } from '../../core/book.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {

  books$: Observable<Book[]>

  constructor(private dialog: MatDialog, private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooksForUser('c7d52279-f39e-4c11-9cab-567821251d65');
  }

  onCreateBookClick() {
    this.dialog.open(NewBookComponent, {
      width: '500px'
    });
  }

}
