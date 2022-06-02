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
import { PerfilModule } from './pages/perfil/perfil.module';
import { AboutComponent } from './pages/about/about.component';
import { ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    MainComponent,
    HomeComponent,
    AboutComponent
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RecetasModule,
    NoticiasModule,
    CategoriasModule,
    PerfilModule
  ]
})
export class AuthModule { }
