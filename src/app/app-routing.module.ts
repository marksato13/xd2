//archivo de ruteo 

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';
import { ContenidoinicioComponent } from './modules/inicio/pages/contenidoinicio//contenidoinicio.component';


//ruta la pagina 
const routes: Routes = [
  { path: 'inicio', component: ContenidoinicioComponent },
  {
path: 'auth',
loadChildren: ()=> import('./modules/auth/auth.module').then((e)=> e.AuthModule)
 },
  {
    path:'home',
    component:HomePagesComponent,
    loadChildren: ()=> import('./modules/home/home.module').then((e)=> e.HomeModule)
  },
  {
    path: '**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
