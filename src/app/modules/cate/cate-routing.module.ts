import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatePagesComponent } from './pages/cate-pages/cate-pages.component';

const routes: Routes = [

  {
    path: '',
    component: CatePagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CateRoutingModule { }
