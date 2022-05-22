import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerDataRequest, UsuariosApiService } from 'src/app/services/usuarios-api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public registerDataRequest: registerDataRequest = {
    username : "",
    email : "",
    contrasenia : ""
}
  constructor(private usuarios_api:UsuariosApiService,private router: Router) { }

  ngOnInit(): void {
  } 

  aniadirUsuario(){
    this.usuarios_api.addUser(this.registerDataRequest)
    }
}
