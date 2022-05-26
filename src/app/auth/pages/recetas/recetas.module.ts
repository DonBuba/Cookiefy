import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetasRoutingModule } from './recetas-routing.module';
import { AniadirRecetaComponent } from './aniadir-receta/aniadir-receta.component';
import { EditarRecetaComponent } from './editar-receta/editar-receta.component';
import { RecetaUnicaComponent } from './receta-unica/receta-unica.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [
      AniadirRecetaComponent,
      EditarRecetaComponent,
      RecetaUnicaComponent,
      ResultadosBusquedaComponent
  ],
  imports: [
    CommonModule,
    RecetasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class RecetasModule { }
