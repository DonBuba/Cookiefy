import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comentarioData, RecetasApiService } from 'src/app/services/recetas-api.service';
import { UsuariosApiService } from 'src/app/services/usuarios-api.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { CategoriasApiService } from 'src/app/services/categorias-api.service';

@Component({
  selector: 'app-receta-unica',
  templateUrl: './receta-unica.component.html',
  styleUrls: ['./receta-unica.component.scss']
})
export class RecetaUnicaComponent implements OnInit {
  recetaId=this.router.snapshot.paramMap.get('id')
  loaded:boolean=false
  icono=faFilm;
  receta:any[]=[]
  creador:any[]=[]
  comentarios:any[]=[]
  public comentarioData:comentarioData={
    idUsuario : 4,
    idReceta : this.recetaId,
    contenido : ''
  }
  constructor(private router:ActivatedRoute,private recetas_api:RecetasApiService, private usuarios_api:UsuariosApiService) { 
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
    })
  }

  cogerComentariosPorReceta(){
    this.recetas_api.getComentariosByReceta(this.recetaId).subscribe( (res:any) =>{
      console.log(res)
      this.comentarios = res;
      return this.comentarios;
    })
  }
}
