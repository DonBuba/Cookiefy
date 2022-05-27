import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoApiService } from 'src/app/services/acceso-api.service';
import { noticiaData, NoticiasApiService } from 'src/app/services/noticias-api.service';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.scss']
})
export class CrearNoticiaComponent implements OnInit {
  idUsuario:any=localStorage.getItem('id')
  rolUsuario:any=localStorage.getItem('rol')

  constructor(private noticias_api:NoticiasApiService,  private router2: Router, private acceso_api:AccesoApiService) { }
  public noticiaData:noticiaData={
    titulo:'',
    cuerpo:'',
    idCreador:this.idUsuario,
    link:''
  }
  ngOnInit(): void {
  }

  crearNoticia(){
    this.noticias_api.crearNoticia(this.noticiaData).subscribe( (res:any) => {
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
