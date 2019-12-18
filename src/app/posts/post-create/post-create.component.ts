import {Component} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  newPost = '';
  Test = 'Test Post...';
  enteredValue: '';

  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = this.enteredValue;
    // this.newPost = postInput.value;
    console.log(postInput.value);
    console.dir(postInput);
  }
}
