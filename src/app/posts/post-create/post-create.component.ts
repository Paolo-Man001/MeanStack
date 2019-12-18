import {Component, EventEmitter, Output} from '@angular/core';
import {IPost} from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  enteredTitle: '';
  enteredContent = '';

  @Output() postCreated = new EventEmitter<IPost>(); // Use emitter to emit <IPost> the Post Created

  onAddPost() {
    const post: IPost = {
      title: this.enteredTitle,
      content: this.enteredContent
    };

    /* Emit the post created for other observer to receive.
    *   'post' argument will be '$event' pass along for the observer.
    * */
    this.postCreated.emit(post);
  }
}
