import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasApiService } from 'src/app/services/recetas-api.service';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss']
})
export class ResultadosBusquedaComponent implements OnInit {
  idCategoria=this.router.snapshot.paramMap.get('id')
  recetas:any=[]
  rolUsuario:any=localStorage.getItem('rol')

  constructor(private router:ActivatedRoute, private recetas_api:RecetasApiService) {
    this.obtenerByCategoria();
   }

  ngOnInit(): void {
  }

  obtenerByCategoria(){
    if(this.idCategoria != undefined){
      this.recetas_api.getRecetasByCategoria(this.idCategoria).subscribe((res:any)=>{
        res.map( (receta:any)=>{
          this.recetas.push(receta)
        })
        console.log(this.recetas)
      })
    }else{
      this.recetas_api.getRecetas().subscribe((res:any)=>{
        res.map( (receta:any)=>{
          this.recetas.push(receta)
        })
        console.log(this.recetas)
      })
    }
   
  }

  eliminarReceta(idReceta:any){
    console.log(idReceta);
    this.recetas_api.eliminarReceta(idReceta).subscribe((res:any)=>{
      console.log(res);
    });
  }

}
