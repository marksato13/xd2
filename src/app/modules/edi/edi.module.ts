import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdiRoutingModule } from './edi-routing.module';
import { EdiPagesComponent } from './pages/edi-pages/edi-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EdiPagesComponent
  ],
  imports: [
    CommonModule,
    EdiRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class EdiModule { }
