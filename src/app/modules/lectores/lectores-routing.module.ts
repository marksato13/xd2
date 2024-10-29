import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LectoresPagesComponent } from './pages/lectores-pages/lectores-pages.component';

const routes: Routes = [
  {
    path: '',
    component: LectoresPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LectoresRoutingModule { }
