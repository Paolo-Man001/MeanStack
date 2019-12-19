import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IPost} from '../post.model';
import {PostsService} from '../posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post-content'},
  //   {title: 'Second Post', content: 'This is the second post-content'},
  //   {title: 'Third Post', content: 'This is the third post-content'},
  //   {title: 'Fourth Post', content: 'This is the fourth post-content'}
  // ];

  // @Input() posts: IPost[] = [];
  posts: IPost[] = [];
  private postsSb: Subscription;  // from rxjs


  constructor(public postsService: PostsService) {
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();

    // subscribe to observable's changes and update what needs to be displayed.
    this.postsService.getPostUpdateListener()
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {   // from using rxjs
    this.postsSb.unsubscribe();
  }

}
