import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoApiService } from 'src/app/services/acceso-api.service';
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
  rolUsuario:any=localStorage.getItem('rol')
  idUsuario:any=localStorage.getItem('id')

  constructor(private recetas_api:RecetasApiService,private router: Router, private categorias_api:CategoriasApiService, private acceso_api:AccesoApiService) { }

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

  llevarPerfil(){
    if(this.rolUsuario !=null){
     if(this.rolUsuario === 'ROLE_USER'){
      this.router.navigateByUrl('/perfil')
     }else{
      console.log("logueado  y admin")
     }
    }else{
      console.log("No logueado")
    }
  }

  editarPerfil(){
    if(this.rolUsuario === 'ROLE_USER'){
      this.router.navigateByUrl('auth/perfil/editarPerfil'+this.idUsuario)     
    }
  }
  logOut(){
    this.acceso_api.logOut()
    location.reload();
  }

 
}
