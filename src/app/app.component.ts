import {Component} from '@angular/core';
import {IPost} from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
   'storedPosts' is the variable used by app-post-list Component
   to get the emitted data from app-post-create Component.
  */
  storedPosts: IPost[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
