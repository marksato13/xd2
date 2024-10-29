import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdiPagesComponent } from './pages/edi-pages/edi-pages.component';

const routes: Routes = [
  {
    path: '',
    component: EdiPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdiRoutingModule { }
