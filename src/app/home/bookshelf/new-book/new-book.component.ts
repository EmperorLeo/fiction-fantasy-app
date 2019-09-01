import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../../core/book.service';
import { MatDialogRef } from '@angular/material';
import { Book } from 'src/app/core/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  genres: any[] = [
    { name: 'Science Fiction', value: 0 },
    { name: 'Fantasy', value: 1 },
    { name: 'Romance', value: 2 },
    { name: 'Satire', value: 3 },
    { name: 'Science Fantasy', value: 4 },
    { name: 'Adventure', value: 5 },
    { name: 'Mystery', value: 6 },
    { name: 'Horror', value: 7 },
    { name: 'Historical Fiction', value: 8 },
    { name: 'Religious', value: 9 },
    { name: 'Drama', value: 10 }
  ];

  viewpoints: any[] = [
    { name: 'First Person', value: 0 },
    { name: 'Second Person', value: 1 },
    { name: 'Third Person', value: 2 }
  ];
  saving = false;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private dialogRef: MatDialogRef<NewBookComponent>
  ) { }

  bookForm: FormGroup;

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      mainIdea: ['', Validators.maxLength(2048)],
      genre: [null, Validators.required],
      viewpoint: [null, Validators.required]
    });
  }

  redirect() {
    
  }

  createBook() {
    let book = <Book>this.bookForm.value;
    this.saving = true;
    this.bookService.createBook('c7d52279-f39e-4c11-9cab-567821251d65', book).subscribe(result => {
      this.dialogRef.close(book);
      this.router.navigate(['./editor']);
    }, error => {
      this.saving = false;
      console.log('ERRORS: ', error);
    });
  }

}
