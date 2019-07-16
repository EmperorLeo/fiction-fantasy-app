import { BookService } from './book.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ENVIRONMENT, LOCATION, LOCALSTORAGE } from './injection-tokens';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    BookService,
    AuthService,
    AuthGuard,
    { provide: ENVIRONMENT, useValue: environment },
    { provide: LOCATION, useValue: location },
    { provide: LOCALSTORAGE, useValue: localStorage }
  ]
})
export class CoreModule { }
