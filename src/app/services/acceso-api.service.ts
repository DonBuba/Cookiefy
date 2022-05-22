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
     this.http.post(`${this.apiUrl}/login`,loginData).subscribe(res => {
      console.log(res,loginData);
      // localStorage.setItem('tokem)
      return res;
    })
  }
}

 //Interfaces

 export interface LoginDataRequest{
  email:string,
  contrasenia:string
}