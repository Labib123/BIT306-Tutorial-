import {Component,EventEmitter, Output} from '@angular/core'  ;
import {Post} from '../post.model' ; 
import {NgForm} from '@angular/forms'
import { PostsService } from '../posts.service';
import { Router } from '@angular/router'; 

@Component({
  selector:'app-post-create', 
  templateUrl: 'post-create.component.html',
  styleUrls: ['post-create.component.css'] 
})

export class PostCreateComponent{ 

  enteredContent:string ='' ; 
  enteredTitle:string = '';

  constructor(public postService:PostsService,private router: Router){

  }
  onAddPost(form:NgForm){
    if(form.invalid){
      return;
    }
      this.postService.addPosts(form.value.title , form.value.content)
      form.reset() ;
      this.router.navigate(['list']);
  }

  
   
}