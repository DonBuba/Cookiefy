import { Component, OnInit } from '@angular/core';
import { noticiaData, NoticiasApiService } from 'src/app/services/noticias-api.service';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.scss']
})
export class CrearNoticiaComponent implements OnInit {
  idUsuario:any=localStorage.getItem('id')
  constructor(private noticias_api:NoticiasApiService) { }
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
}
