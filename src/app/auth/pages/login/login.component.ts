import { Component, OnInit } from '@angular/core';
import { AccesoApiService, LoginDataRequest } from 'src/app/services/acceso-api.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginData:LoginDataRequest ={
    email : "",
    contrasenia:""
  }

  constructor(private acceso_api:AccesoApiService,private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginData)
    this.acceso_api.login(this.loginData)
    this.router.navigateByUrl('auth/registro')
  }

}
