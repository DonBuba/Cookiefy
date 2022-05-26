import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCategoriaComponent } from '../categorias/editar-categoria/editar-categoria.component';
import { CrearNoticiaComponent } from './crear-noticia/crear-noticia.component';
import { EditarNoticiaComponent } from './editar-noticia/editar-noticia.component';
import { ListadoNoticiaComponent } from './listado-noticia/listado-noticia.component';

const routes: Routes = [
  {path:'listado',component:ListadoNoticiaComponent},
  {path:'editarNoticia/:id',component:EditarNoticiaComponent},
  {path:'crearNoticia',component:CrearNoticiaComponent},
  {path:'**',component:ListadoNoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
