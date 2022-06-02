import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoApiService } from 'src/app/services/acceso-api.service';
import { categoriaData, CategoriasApiService } from 'src/app/services/categorias-api.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.scss']
})
export class CrearCategoriaComponent implements OnInit {
  idUsuario:any=localStorage.getItem('id')
  rolUsuario:any=localStorage.getItem('rol')
  constructor(private categorias_api:CategoriasApiService,private router2: Router, private acceso_api:AccesoApiService) { }
  
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
    this.router2.navigateByUrl('auth/perfil/editarPerfil/'+this.idUsuario)     
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
  llevarEditarPerfil(){
    this.router2.navigateByUrl('auth/perfil/editarPerfil/'+this.idUsuario)     

  }
  llevarAbout(){
    this.router2.navigateByUrl('auth/about')

  }
  
}
