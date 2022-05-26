import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecetasApiService } from 'src/app/services/recetas-api.service';
import { UsuariosApiService } from 'src/app/services/usuarios-api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  idUsuario:any=localStorage.getItem('id')
  usuario:any=[]
  recetas:any=[]
  constructor(private usuarios_api:UsuariosApiService,private recetas_api:RecetasApiService, private router:Router) { 
    this.obtenerDatos();
    this.getRecetasByUser();
  }

  ngOnInit(): void {
  } 

  obtenerDatos(){
    this.usuarios_api.getUser(this.idUsuario).subscribe((res:any)=>{
      this.usuario.push(res);
      console.log(this.usuario);
    })
  }

  getRecetasByUser(){
    this.recetas_api.getRecetasByUser(this.idUsuario).subscribe((res:any)=>{
      this.recetas.push(res)
      console.log(this.recetas)
    })
  }

  llevarRecetaUnica(recetaId:any){
    this.router.navigateByUrl('auth/recetas/recetaUnica/'+recetaId)
  }
}
