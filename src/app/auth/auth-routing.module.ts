import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoApiService } from '../services/acceso-api.service';
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