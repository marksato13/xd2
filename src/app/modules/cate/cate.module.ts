import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CateRoutingModule } from './cate-routing.module';
import { CatePagesComponent } from './pages/cate-pages/cate-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CatePagesComponent
  ],
  imports: [
    CommonModule,
    CateRoutingModule,
    SharedModule,
    FormsModule, // Agrega FormsModule aquí

  ]
})
export class CateModule { }
