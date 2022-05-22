import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AniadirRecetaComponent } from './aniadir-receta/aniadir-receta.component';
import { EditarRecetaComponent } from './editar-receta/editar-receta.component';
import { RecetaUnicaComponent } from './receta-unica/receta-unica.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';

const routes: Routes = [
  {path:'aniadirReceta', component:AniadirRecetaComponent},
  {path:'editarReceta/:id',component:EditarRecetaComponent},
  {path:'resultados',component:ResultadosBusquedaComponent},
  {path:'recetaUnica/:id',component:RecetaUnicaComponent},
  {path:'**',component:ResultadosBusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetasRoutingModule { }
