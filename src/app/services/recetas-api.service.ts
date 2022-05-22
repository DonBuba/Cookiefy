import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
}


//INTERFACES

export interface aniadirReceta  {

  titulo:string,
  cuerpo:string,
  link:string,
  categoria:number,
  idCreador:number,
  ingredientes?:[],
  descripcion:string,
  dificultad:string,
  tiempo:number,
  comensales:number,
  imagen: any

}