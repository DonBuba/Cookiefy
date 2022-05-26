import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { RecetasModule } from './pages/recetas/recetas.module';
import { NoticiasModule } from './pages/noticias/noticias.module';
import { CategoriasModule } from './pages/categorias/categorias.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    MainComponent,
    HomeComponent
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RecetasModule,
    NoticiasModule,
    CategoriasModule
  ]
})
export class AuthModule { }
