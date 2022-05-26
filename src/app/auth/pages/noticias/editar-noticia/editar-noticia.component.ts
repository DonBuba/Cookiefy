import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { editarNoticiaData, NoticiasApiService } from 'src/app/services/noticias-api.service';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.scss']
})
export class EditarNoticiaComponent implements OnInit {
  idNoticia=this.router.snapshot.paramMap.get('id')
  noticia:any=[]
  public editarNoticiasData:editarNoticiaData={
    titulo:this.noticia.titulo,
    cuerpo:this.noticia.cuerpo,
    idCreador:this.noticia.idCreador,
    link:this.noticia.imagen
  }
  constructor(private noticias_api:NoticiasApiService,private router:ActivatedRoute) { 
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
}
