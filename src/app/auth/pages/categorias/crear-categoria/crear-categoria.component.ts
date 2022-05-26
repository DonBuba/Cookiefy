import { Component, OnInit } from '@angular/core';
import { categoriaData, CategoriasApiService } from 'src/app/services/categorias-api.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.scss']
})
export class CrearCategoriaComponent implements OnInit {

  constructor(private categorias_api:CategoriasApiService) { }
  
  public categoriaData:categoriaData={
    nombre:'',
    descripcion:'',
    imagen:''
  }
  ngOnInit(): void {
  }


  crearCategoria(){
    this.categorias_api.crearCategoria(this.categoriaData).subscribe((res:any) => {
      console.log(res)
    })
  }
}
