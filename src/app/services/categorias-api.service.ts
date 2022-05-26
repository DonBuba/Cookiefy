import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasApiService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  obtenerCategorias(){
     return this.http.get(`${this.apiUrl}/getAllCategories`)
  }

  crearCategoria(categoriaData:categoriaData){
    console.log(categoriaData)
    return this.http.post(`${this.apiUrl}/addCategory`,categoriaData)
  }
}

export interface categoriaData{
    nombre:string,
    descripcion:string,
    imagen:string
}