import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasApiService } from 'src/app/services/categorias-api.service';
import { RecetasApiService } from 'src/app/services/recetas-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  recetas : any[] =  []
  categorias: any[] = []
  constructor(private recetas_api:RecetasApiService,private router: Router, private categorias_api:CategoriasApiService) { }

  ngOnInit(): void {
    this.getRecetas();
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this.categorias_api.obtenerCategorias().subscribe((res:any) => {
      this.categorias = res;
      console.log(this.categorias)
    })
  }
  getRecetas(){
  this.recetas_api.getRecetas().subscribe( (res:any) => {
     this.recetas = res;
     console.log(this.categorias)
   })
  }
}
