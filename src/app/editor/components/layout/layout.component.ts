import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from '../../../core/book.service';
import { switchMap } from 'rxjs/operators';
import { Book } from 'src/app/core/models/book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  private book$: Observable<Book>;

  constructor(private router: Router, private bookService: BookService, private route: ActivatedRoute) { }

  // TODO: Refactor into some service that loads the book basic info and caches it
  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.bookService.getBook(params.get('id')))
    );
  }

  brandClicked() {
    this.router.navigateByUrl("/");
  }

}
