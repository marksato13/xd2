import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ContenidoinicioComponent } from '../inicio/pages/contenidoinicio/contenidoinicio.component';
import { PerfilPagesComponent } from '../perfil/pages/perfil-pages/perfil-pages.component';

const routes: Routes = [
  { path: 'inicio', component: ContenidoinicioComponent },
  
  { path: 'perfil', component: PerfilPagesComponent },


  { 
    path:'cate',
    loadChildren: ()=> import('../cate/cate.module').then((e)=> e.CateModule)
  },

  {
    
    path:'edi',
    loadChildren: ()=> import('../edi/edi.module').then((e)=> e.EdiModule)
  },
  {
    
    path:'autor',
    loadChildren: ()=> import('../autor/autor.module').then((e)=> e.AutorModule)
  },
  {
    
    path:'libro',
    loadChildren: ()=> import('../libro/libro.module').then((e)=> e.LibroModule)
  },

  {
    
    path:'lectores',
    loadChildren: ()=> import('../lectores/lectores.module').then((e)=> e.LectoresModule)
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
