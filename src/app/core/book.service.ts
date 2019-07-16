import { environment } from './../../environments/environment';
import { Book } from './models/book.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  createBook(authorId: string, book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${environment.apiUrl}/api/1.0/books`, book);
  }

  getBooksForUser(userId: string) {
    return this.httpClient.get<Book[]>(`${environment.apiUrl}/api/1.0/users/${userId}/books`)
  }
}
