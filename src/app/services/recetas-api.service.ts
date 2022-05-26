import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasApiService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }


  addReceta(aniadirRecetaData:aniadirReceta){
    console.log(aniadirRecetaData)
    return this.http.post(`${this.apiUrl}/addRecipe`,aniadirRecetaData).subscribe(res => {
      console.log(res)
      return res;
    })
  }

  getRecetas(){
     return this.http.get(`${this.apiUrl}/getAllRecipes`)
  }

  eliminarReceta(idReceta:any){
    return this.http.delete(`${this.apiUrl}/deleteRecipe/`+idReceta)
  }

  getReceraById(recetaId:any){
    return this.http.get(`${this.apiUrl}/getOneRecipe/`+recetaId)
  }


  aniadirComentario(comentarioData:comentarioData){
    return this.http.post(`${this.apiUrl}/addComment/` ,comentarioData)
  }

  getComentariosByReceta(idReceta:any) {
    console.log(idReceta)
    return this.http.get(`${this.apiUrl}/getCommentByRecipe/`+idReceta)
  }

  editarReceta(editarReceta:editarReceta,idReceta:any){
    console.log(editarReceta,idReceta)
    return this.http.put(`${this.apiUrl}/updateRecipe/`+idReceta ,editarReceta)
  }

  getRecetasByCategoria(idCategoria:any){
    console.log(idCategoria)
    return this.http.get(`${this.apiUrl}/getRecipeByCategory/`+idCategoria)

  }

  getRecetasByUser(idUsuario:any){
    return this.http.get(`${this.apiUrl}/getRecipeByUser/`+idUsuario)

  }
}


//INTERFACES

export interface aniadirReceta  {

  titulo:string,
  cuerpo:string,
  link:string,
  categoria:number,
  idCreador:number,
  ingredientes?:string,
  descripcion:string,
  dificultad:string,
  tiempo:number,
  comensales:number,
  imagen: any

}

export interface comentarioData{
  idUsuario:number,
  idReceta:any,
  contenido:string
}

export interface editarReceta {
  titulo?:string,
  cuerpo?:string,
  link?:string,
  categoria?:number,
  idCreador?:number,
  ingredientes?:[],
  descripcion?:string,
  dificultad?:string,
  tiempo?:number,
  comensales?:number,
  imagen?: any
}