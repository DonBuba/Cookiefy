import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosApiService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  addUser(registerDataRequest: registerDataRequest) {
    return this.http.post(`${this.apiUrl}/addUser`, registerDataRequest).subscribe(res => {
      console.log(res, registerDataRequest);
      return res;
    })
  }

  getUser(idUsuario:any):any{
    return this.http.get(`${this.apiUrl}/getOneUser/`+idUsuario)
  }

 

}

//INTERFACES

export interface registerDataRequest {
  username:string,
  email:string,
  contrasenia:string
}
