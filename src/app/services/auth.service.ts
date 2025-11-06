import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  export class AuthService { 
  isLoggedIn: boolean = false;
  public redirectUrl: string = "";

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    
    return this.http.post<any>("https://localhost:7214/api/login/login", {
      username,
      password
    });
  }
} 