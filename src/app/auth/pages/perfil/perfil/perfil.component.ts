import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoApiService } from 'src/app/services/acceso-api.service';
import { RecetasApiService } from 'src/app/services/recetas-api.service';
import { UsuariosApiService } from 'src/app/services/usuarios-api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  rolUsuario:any=localStorage.getItem('rol')
  idUsuario:any=localStorage.getItem('id')
  usuario:any=[]
  recetas:any=[]
  constructor(private usuarios_api:UsuariosApiService,private recetas_api:RecetasApiService,   private router2: Router, private acceso_api:AccesoApiService) { 
    this.obtenerDatos();
    this.getRecetasByUser();
  }

  ngOnInit(): void {
  } 

  obtenerDatos(){
    this.usuarios_api.getUser(this.idUsuario).subscribe((res:any)=>{
      this.usuario.push(res);
      console.log(this.usuario);
    })
  }

  getRecetasByUser(){
    this.recetas_api.getRecetasByUser(this.idUsuario).subscribe((res:any)=>{
      this.recetas.push(res)
      console.log(this.recetas)
    })
  }

  llevarRecetaUnica(recetaId:any){
    this.router2.navigateByUrl('auth/recetas/recetaUnica/'+recetaId)
  }
  llevarPerfil(){
    if(this.rolUsuario !=null){
     if(this.rolUsuario === 'ROLE_USER'){
      this.router2.navigateByUrl('auth/perfil',this.idUsuario)
     }else{
      console.log("logueado  y admin")
     }
    }else{
      console.log("No logueado")
    }
  }

  editarPerfil(){
    this.router2.navigateByUrl('perfil/editarPerfil',this.idUsuario)
  }

  llevarNoticias(){
    this.router2.navigateByUrl('auth/noticias')
  }

  llevarRecetas(){ 
    this.router2.navigateByUrl('auth/recetas')
  }
  logOut(){
    this.acceso_api.logOut()
    location.reload();
  }

  llevarLogin(){
    this.router2.navigateByUrl('auth/login')

  }
  llevarEditarPerfil(){
    this.router2.navigateByUrl('auth/perfil/editarPerfil/'+this.idUsuario)     

  }
  llevarAbout(){
    this.router2.navigateByUrl('auth/about')

  }




}
