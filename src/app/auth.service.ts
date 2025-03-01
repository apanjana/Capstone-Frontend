import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}

  url: string = "http://localhost:9999"

  getAuthHeader(): HttpHeaders{
    let token = localStorage.getItem("authToken")
    let headers = new HttpHeaders();
    if (token) {
      // token = token.replace(/"/g, '');
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers
  }

  getUser(email: string): Observable<any> {
    return this.http.get(`${this.url}`, { headers: this.getAuthHeader() });
  }


  // authenticate(email:string,password:string): Observable<any>{
  //   let cred = {
  //     "email" : email,
  //     "password" : password
  //   }
  //   return this.http.post(`${this.url}/auth/login`,cred)
  // }

 
  authenticate(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post(`${this.url}/auth/login`, credentials);
  }

  // Signup method
  signup(email: string, password: string): Observable<any> {
    const data = { email, password };
    return this.http.post(`${this.url}/auth/signup`, data);
  }
  



}
