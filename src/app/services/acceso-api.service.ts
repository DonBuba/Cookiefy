import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccesoApiService {
  apiUrl : string = environment.apiUrl;
  constructor(private http:HttpClient) { }

  login(loginData:LoginDataRequest){
     this.http.post(`${this.apiUrl}/login`,loginData).subscribe((res:any) => {
      console.log(res,loginData);
      localStorage.setItem('token',JSON.stringify(res.token));
      localStorage.setItem('user',JSON.stringify(res.user.username))
      localStorage.setItem('rol',JSON.stringify(res.user.rol))
      localStorage.setItem('id',JSON.stringify(res.user.id))
      return res;
    })
  }

  logOut(){
     localStorage.clear();
  }
}

 //Interfaces

 export interface LoginDataRequest{
  email:string,
  contrasenia:string
}