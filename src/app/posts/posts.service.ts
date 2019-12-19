import {IPost} from './post.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


/* @Injectable declares this class as a 'service-provider' for
* dependency injection. This would be the same if we register
* this class inside app.module.ts inside 'providers:[]'
* */
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: IPost[] = [];
  private postsUpdated = new Subject<IPost[]>();  // using rxjs


  getPosts() {
    return [...this.posts]; // '...' is ES7 syntax to COPY this.posts, instead of referencing
  }


  getPostUpdateListener() {
    return this.postsUpdated.asObservable();  // using rxjs
  }


  addPost(title: string, content: string) {
    const post: IPost = {title, content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);  // using rxjs
  }
}
