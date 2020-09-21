import { Component, OnInit , Input } from '@angular/core';
import {PostsService } from '../posts.service'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postsService:PostsService ;
  @Input() posts = [] ; 
  constructor(public postService: PostsService) {
   }

  ngOnInit(): void {
    this.posts = this.postService.getPosts() ; 
  }


}
