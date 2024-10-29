import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorPagesComponent } from './pages/autor-pages/autor-pages.component';

const routes: Routes = [{
  path: '',
  component: AutorPagesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }
