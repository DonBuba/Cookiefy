import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiasApiService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  crearNoticia(noticiaData:any){
    console.log(noticiaData)
    return this.http.post(`${this.apiUrl}/addNew`,noticiaData)
  }

  getNoticias(){
    return this.http.get(`${this.apiUrl}/getAllNews`)
  }

  eliminarNoticia(idNoticia:any){
    console.log(idNoticia)
      return this.http.delete(`${this.apiUrl}/deleteNew/`+idNoticia)
  }

  editarNoticia(editarNoticia:editarNoticiaData,idNoticia:any){
    console.log(editarNoticia,idNoticia)
    return this.http.put(`${this.apiUrl}/updateNew/`+idNoticia,editarNoticia)
  }

  getNoticiaById(idNoticia:any){
    console.log(idNoticia)
    return this.http.get(`${this.apiUrl}/getOneNew/`+idNoticia)
  }
}

export interface noticiaData{
  titulo:string,
  cuerpo:string,
  idCreador:number,
  link:string
}

export interface editarNoticiaData{
  titulo:string,
  cuerpo:string,
  idCreador:number,
  link:string
}