import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroPagesComponent } from './pages/libro-pages/libro-pages.component';

const routes: Routes = [
  {
    path: '',
    component: LibroPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }
