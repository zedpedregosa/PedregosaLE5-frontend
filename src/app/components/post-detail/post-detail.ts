import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-post-detail',
  standalone: true,  
  imports: [
    CommonModule   
  ],
  templateUrl: './post-detail.html',
  styleUrls: ['./post-detail.css']
})
export class PostDetailComponent implements OnInit {

  private routeSub: Subscription = new Subscription(); 
  private id: number = 0; 
  post?: Post; 

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient 
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.initData(); 
    });
  }

  initData(): void {
    
    this.http.get<Post>("https://localhost:7214/api/post/" + this.id) 
      .subscribe({
        next: (data: Post) => {
          this.post = data; 
          console.log(this.post); 
        }
      });
  }
}