import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoApiService } from 'src/app/services/acceso-api.service';
import { NoticiasApiService } from 'src/app/services/noticias-api.service';

@Component({
  selector: 'app-listado-noticia',
  templateUrl: './listado-noticia.component.html',
  styleUrls: ['./listado-noticia.component.scss']
})
export class ListadoNoticiaComponent implements OnInit {
  noticias:any
  idUsuario:any=localStorage.getItem('id')
  rolUsuario:any=localStorage.getItem('rol')

  constructor(private noticias_api:NoticiasApiService,  private router2: Router, private acceso_api:AccesoApiService) { 
    this.obtenerNoticias();
  }

  ngOnInit(): void {
  }

  obtenerNoticias(){
    this.noticias_api.getNoticias().subscribe((res:any) => {
      this.noticias = res;
      console.log(res);
      return this.noticias
    })
  }

  borrarNoticia(idNoticia:any){
    this.noticias_api.eliminarNoticia(idNoticia).subscribe((res:any)=>{
      console.log(res)
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
