import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';

const routes: Routes = [
  {path:'crearCategoria',component:CrearCategoriaComponent},
  {path:'editarCategoria/:id',component:EditarCategoriaComponent},
  {path:'**',component:CrearCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
