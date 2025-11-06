import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list-posts.html',
  styleUrls: ['./list-posts.css']
})
export class ListPostsComponent implements OnInit {

  posts?: Post[] = []; 

  constructor(private http: HttpClient) { } 

  ngOnInit(): void {
    this.initData(); 
  }

  initData(): void {
    
    this.http.get<Post[]>('https://localhost:7214/api/Post') 
      .subscribe({
        next: (data: Post[]) => {
          this.posts = data; 
          console.log(this.posts); 
        }
      });
  }
}