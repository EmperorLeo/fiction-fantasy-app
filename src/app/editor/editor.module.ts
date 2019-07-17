import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorRoutingModule } from './editor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EditorRoutingModule
  ],
  declarations: [
    LayoutComponent,
    IntroductionComponent
  ]
})
export class EditorModule { }
