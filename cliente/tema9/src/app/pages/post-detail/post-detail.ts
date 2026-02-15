import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Posts } from '../../services/posts';
import { Observable, switchMap } from 'rxjs';
import { Post } from '../../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail {
  post$! : Observable<Post>;

 constructor(private route: ActivatedRoute, private router: Router, private postsService: Posts) {
    this.post$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.postsService.getById(id);
      })
    );

  }

  deletePost(id: number) {
    const ok = confirm('Are you sure you want to delete this post?');
    if (ok) {
      this.postsService.delete(id).subscribe(() => {
        this.router.navigate(['/posts']);
      });
    }else {
      return;
    }
  }
}
