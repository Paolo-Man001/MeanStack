import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  enteredTitle: '';
  enteredContent = '';

  /*
   // injecting postsService eliminate the need of EventEmitter.
   @Output() postCreated = new EventEmitter<IPost>(); // Use emitter to emit <IPost> the Post Created
  */

  constructor(public postsService: PostsService) {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);

    /*const post: IPost = {
      title: form.value.title,
      content: form.value.content
    };*/

    /* Emit the post created for other observer to receive.
    *   'post' argument will be '$event' pass along for the observer.
    * // this.postCreated.emit(post);
    * */
  }
}
