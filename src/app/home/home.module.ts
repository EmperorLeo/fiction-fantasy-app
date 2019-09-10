import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { SharedModule } from '../shared/shared.module';
import { NewBookComponent } from './bookshelf/new-book/new-book.component';
import { BookComponent } from './bookshelf/book/book.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, BookshelfComponent, NewBookComponent, BookComponent],
  entryComponents: [ NewBookComponent ]
})
export class HomeModule { }
