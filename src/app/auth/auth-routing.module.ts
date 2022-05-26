import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path:'recetas',
    loadChildren: () => import ('./pages/recetas/recetas.module').then(m => m.RecetasModule)
  },
  {
    path:'noticias',
    loadChildren: () => import ('./pages/noticias/noticias.module').then(m => m.NoticiasModule)

  },
  {
    path:'categorias',
    loadChildren: () => import ('./pages/categorias/categorias.module').then(m => m.CategoriasModule)

  },
  {
    path:'perfil',
    loadChildren: () => import ('./pages/perfil/perfil.module').then(m => m.PerfilModule)
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {path:'login', component:LoginComponent},
      {path:'registro', component:RegistroComponent},
      {path:'**', component:HomeComponent}

    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
