import {IPost} from './post.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';


/* @Injectable declares this class as a 'service-provider' for
* dependency injection. This would be the same if we register
* this class inside app.module.ts inside 'providers:[]'
* */
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: IPost[] = [];
  private postsUpdated = new Subject<IPost[]>();  // using rxjs for Subject<>() class


  constructor(private http: HttpClient) {
  }


  // GET: get-posts
  getPosts() {
    /*  Get the specified object from the path we provided/targeted.
     *  get() automatically extracts and formats the data and returns it.
    */
    this.http.get<{ message: string, posts: IPost[] }>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;  // save the posts from server and save to this.posts
        this.postsUpdated.next([...this.posts]);
      });

    // return [...this.posts]; // '...' is ES7 syntax to COPY this.posts, instead of referencing
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();  // using rxjs
  }


  // POST: add-post
  addPost(title: string, content: string) {
    const post: IPost = {id: null, title, content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);  // using rxjs
  }
}
