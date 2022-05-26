import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { EditarNoticiaComponent } from './editar-noticia/editar-noticia.component';
import { CrearNoticiaComponent } from './crear-noticia/crear-noticia.component';
import { ListadoNoticiaComponent } from './listado-noticia/listado-noticia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarNoticiaComponent,
    CrearNoticiaComponent,
    ListadoNoticiaComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NoticiasModule { }
