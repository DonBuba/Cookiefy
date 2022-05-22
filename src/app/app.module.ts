import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AccesoApiService } from './services/acceso-api.service';
import { AuthModule } from './auth/auth.module';
import { ProtectedModule } from './protected/protected.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosApiService } from './services/usuarios-api.service';
import { CategoriasApiService } from './services/categorias-api.service';
import { NoticiasApiService } from './services/noticias-api.service';
import { RecetasApiService } from './services/recetas-api.service';
import { RecetasModule } from './auth/pages/recetas/recetas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    ProtectedModule,
    HttpClientModule,
    RecetasModule
  ],
  providers: [
    AccesoApiService,
    UsuariosApiService,
    CategoriasApiService,
    NoticiasApiService,
    RecetasApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
