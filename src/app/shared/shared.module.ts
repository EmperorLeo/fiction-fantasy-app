import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatButtonModule, MatRippleModule } from '@angular/material'
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


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
    FlexLayoutModule
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
    FlexLayoutModule
  ],
  declarations: []
})
export class SharedModule { }
