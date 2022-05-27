import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { comentarioData, RecetasApiService } from 'src/app/services/recetas-api.service';
import { UsuariosApiService } from 'src/app/services/usuarios-api.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { CategoriasApiService } from 'src/app/services/categorias-api.service';
import { AccesoApiService } from 'src/app/services/acceso-api.service';

@Component({
  selector: 'app-receta-unica',
  templateUrl: './receta-unica.component.html',
  styleUrls: ['./receta-unica.component.scss']
})
export class RecetaUnicaComponent implements OnInit {
  idUsuario:any=localStorage.getItem('id')
  recetaId=this.router.snapshot.paramMap.get('id')
  rolUsuario:any=localStorage.getItem('rol')
  loaded:boolean=false
  icono=faFilm;
  receta:any[]=[]
  creador:any[]=[]
  comentarios:any[]=[]
  public comentarioData:comentarioData={
    idUsuario : this.idUsuario,
    idReceta : this.recetaId,
    contenido : ''
  }
  constructor(private router:ActivatedRoute,private recetas_api:RecetasApiService, private usuarios_api:UsuariosApiService,private router2: Router, private acceso_api:AccesoApiService) { 
    this.getRecetaById()
    this.cogerComentariosPorReceta()
  }

  ngOnInit(): void {
  
  }

   getRecetaById(){
     this.recetas_api.getReceraById(this.recetaId).subscribe((res:any) => {
      this.receta.push(res)
      console.log(this.receta)
      return this.receta
    })
    this.loaded =true;
  }

   getUser(){
    let  res =   this.recetas_api.getReceraById(this.recetaId)
    
  }

  aniadirComentario(){
    console.log(this.comentarioData)
    this.recetas_api.aniadirComentario(this.comentarioData).subscribe(res => {
      console.log(res)
    })
  }

  cogerComentariosPorReceta(){
    this.recetas_api.getComentariosByReceta(this.recetaId).subscribe( (res:any) =>{
      this.comentarios.push(res[0]);
      console.log(this.comentarios)
      return this.comentarios;
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
