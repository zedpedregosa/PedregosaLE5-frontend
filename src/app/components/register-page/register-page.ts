import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,  
  imports: [
    CommonModule,  
    FormsModule    
  ],
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.css']
})
export class RegisterPageComponent implements OnInit {

  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null
  }; 

  constructor(
    private http: HttpClient, 
    private route: Router 
  ) { }

  ngOnInit(): void { } 

  
  onSubmit(): void {
    console.log(this.form); 

    
    this.http.post("https://localhost:7214/api/Login/register", this.form, { 
      responseType: 'text' 
    }).subscribe({
        next: data => {
          console.log(data);
          this.route.navigate(['/login']); 
        },
        error: err => {
          console.error(err);
        }
    });
  }
}
