import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [BooksComponent, BookComponent]
})
export class BooksModule { }
