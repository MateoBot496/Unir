import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Posts } from '../../services/posts';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts-list',
  imports: [ AsyncPipe],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css',
})
export class PostsList {
  posts$: Observable<Post[]>;

  constructor(private postsService: Posts) {
    this.posts$ = this.postsService.getAll();
  }
}
