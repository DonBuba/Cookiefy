import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasApiService } from 'src/app/services/categorias-api.service';
import { RecetasApiService } from 'src/app/services/recetas-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recetas : any[] =  []
  categorias: any[] = []
  rolUsuario:any=localStorage.getItem('rol')

  constructor(private router:Router, private categorias_api:CategoriasApiService, private recetas_api:RecetasApiService) { }

  ngOnInit(): void {
   this.obtenerCategorias()
   this.getRecetas();
  }

  obtenerCategorias(){
    this.categorias_api.obtenerCategorias().subscribe((res:any) => {
      this.categorias = res;
      console.log(this.categorias)
      return this.categorias
    })
  }
  getRecetas(){
  this.recetas_api.getRecetas().subscribe( (res:any) => {
     this.recetas = res;
     console.log(this.recetas)
     return this.recetas
   })
  }

  eliminarReceta(idReceta:any){
    console.log(idReceta);
    this.recetas_api.eliminarReceta(idReceta).subscribe((res:any)=>{
      console.log(res);
    });
  }
}
