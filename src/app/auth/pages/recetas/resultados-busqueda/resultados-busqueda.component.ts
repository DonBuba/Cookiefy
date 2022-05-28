import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccesoApiService } from 'src/app/services/acceso-api.service';
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
  idUsuario:any=localStorage.getItem('id')


  constructor(private router:ActivatedRoute, private recetas_api:RecetasApiService,  private router2: Router, private acceso_api:AccesoApiService
    ) {
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

  llevarPerfil(){
    if(this.rolUsuario !=null){
     if(this.rolUsuario === 'ROLE_USER'){
      this.router2.navigateByUrl('auth/perfil',this.idUsuario)
     }else{
      console.log("logueado  y admin")
     }
    }else{
      console.log("No logueado")
    }
  }

  editarPerfil(){
    this.router2.navigateByUrl('perfil/editarPerfil',this.idUsuario)
  }

  llevarNoticias(){
    this.router2.navigateByUrl('auth/noticias')
  }

  llevarRecetas(){ 
    this.router2.navigateByUrl('auth/recetas')
  }
  logOut(){
    this.acceso_api.logOut()
    location.reload();
  }

  llevarLogin(){
    this.router2.navigateByUrl('auth/login')

  }
  
  editarReceta(idReceta:any){
    this.router2.navigateByUrl('auth/recetas/editarReceta/'+idReceta)
  }

  verReceta(idReceta:any){
    this.router2.navigateByUrl('auth/recetas/recetaUnica/'+idReceta)
  }

}
