import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { AutorPagesComponent } from './pages/autor-pages/autor-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AutorPagesComponent,
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    SharedModule,
    FormsModule, 
    

  ]
})
export class AutorModule { }

