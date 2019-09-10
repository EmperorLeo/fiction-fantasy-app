import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

const routes: Routes = [
    // TODO: regex the following path so you cant get to /editor/introduction/introduction
    { path: ':id', component: LayoutComponent, children: [
        { path: 'introduction', component: IntroductionComponent },
        { path: '', pathMatch: 'full', redirectTo: 'introduction' },
        { path: '**', pathMatch: 'full', redirectTo: 'introduction' }
    ]},
    {
      path: '', redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
