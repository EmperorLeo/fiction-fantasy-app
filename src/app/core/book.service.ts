import { PagedList } from './models/paged-list.model';
import { environment } from './../../environments/environment';
import { Book } from './models/book.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { AuthService } from './auth.service';
import { flatMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  createBook(authorId: string, book: Book): Observable<Book> {
    return this.authService.getUserCredentials().pipe(
      flatMap(uc =>  this.httpClient.post<Book>(`${environment.apiUrl}/api/1.0/books`, book, { headers: { Authorization: `Bearer ${uc.accessToken}` } }))
    );
  }

  getBooksForUser() {
    return this.authService.getUserCredentials().pipe(
      flatMap(uc =>  this.httpClient.get<PagedList<Book>>(`${environment.apiUrl}/api/1.0/users/${uc.userId}/books`, { headers: { Authorization: `Bearer ${uc.accessToken}` } })),
      map(res => res.items)
    );
  }

  getBook(bookId: string) {
    return this.authService.getUserCredentials().pipe(
      flatMap(uc =>  this.httpClient.get<Book>(`${environment.apiUrl}/api/1.0/books/${bookId}`, { headers: { Authorization: `Bearer ${uc.accessToken}` } }))
    );
  }
}
