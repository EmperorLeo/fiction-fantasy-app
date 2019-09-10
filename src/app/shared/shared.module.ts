import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatButtonModule, MatRippleModule, MatCardModule, MatToolbarModule } from '@angular/material'
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatRippleModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatRippleModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatCardModule,
    MatToolbarModule
  ],
  declarations: []
})
export class SharedModule { }
