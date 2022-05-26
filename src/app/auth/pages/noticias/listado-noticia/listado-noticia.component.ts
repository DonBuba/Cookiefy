import { Component, OnInit } from '@angular/core';
import { NoticiasApiService } from 'src/app/services/noticias-api.service';

@Component({
  selector: 'app-listado-noticia',
  templateUrl: './listado-noticia.component.html',
  styleUrls: ['./listado-noticia.component.scss']
})
export class ListadoNoticiaComponent implements OnInit {
  noticias:any
  rolUsuario:any=localStorage.getItem('rol')

  constructor(private noticias_api:NoticiasApiService) { 
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
}
