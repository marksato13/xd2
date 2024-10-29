import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultadRoutingModule } from './facultad-routing.module';
import { FacultadPagesComponent } from './pages/facultad-pages/facultad-pages.component';


@NgModule({
  declarations: [
    FacultadPagesComponent
  ],
  imports: [
    CommonModule,
    FacultadRoutingModule
  ]
})
export class FacultadModule { }
