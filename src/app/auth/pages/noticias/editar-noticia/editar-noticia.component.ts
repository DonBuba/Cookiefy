import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccesoApiService } from 'src/app/services/acceso-api.service';
import { editarNoticiaData, NoticiasApiService } from 'src/app/services/noticias-api.service';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.scss']
})
export class EditarNoticiaComponent implements OnInit {
  idNoticia=this.router.snapshot.paramMap.get('id')
  idUsuario:any=localStorage.getItem('id')
  rolUsuario:any=localStorage.getItem('rol')
  noticia:any=[]
  public editarNoticiasData:editarNoticiaData={
    titulo:this.noticia.titulo,
    cuerpo:this.noticia.cuerpo,
    idCreador:this.noticia.idCreador,
    link:this.noticia.imagen
  }
  constructor(private noticias_api:NoticiasApiService,private router:ActivatedRoute, private router2: Router, private acceso_api:AccesoApiService) { 
    this.obtenerDatosNoticia();
  }

  ngOnInit(): void {
  }

  editarNoticia(){
    this.noticias_api.editarNoticia(this.editarNoticiasData,this.idNoticia).subscribe((res:any) =>{
      console.log(res)
    })
  }

  obtenerDatosNoticia(){
    this.noticias_api.getNoticiaById(this.idNoticia).subscribe((res:any) => {
      console.log(res)
      this.noticia=res;
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
