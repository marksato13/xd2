import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibroRoutingModule } from './libro-routing.module';
import { LibroPagesComponent } from './pages/libro-pages/libro-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LibroPagesComponent
  ],
  imports: [
    CommonModule,
    LibroRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule, 
  FormsModule


  ]
})
export class LibroModule { }
