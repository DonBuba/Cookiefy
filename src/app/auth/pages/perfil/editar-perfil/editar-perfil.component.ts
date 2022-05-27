import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoApiService } from 'src/app/services/acceso-api.service';
import { userAct, UsuariosApiService } from 'src/app/services/usuarios-api.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {
  idUsuario:any=localStorage.getItem('id')
  rolUsuario:any=localStorage.getItem('rol')
  roles:any=[{text:'ROLE_USER',value:'ROLE_USER'},{text:'ROLE_ADMIN',value:'ROLE_ADMIN'}]
  public userAct:userAct={
    username:undefined,
    email:undefined,
    contrasenia:undefined,
    rol:undefined
  }
  constructor(private usuarios_api:UsuariosApiService,  private router2: Router, private acceso_api:AccesoApiService
    ) { }

  ngOnInit(): void {
  }

  editarUser(){
    this.usuarios_api.actualizarUser(this.userAct,this.idUsuario).subscribe((res:any)=>{
      console.log(res);
    })
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
  
}
