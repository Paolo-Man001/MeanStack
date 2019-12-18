import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   {title: 'First Post', content: 'This is the first post-content'},
  //   {title: 'Second Post', content: 'This is the second post-content'},
  //   {title: 'Third Post', content: 'This is the third post-content'},
  //   {title: 'Fourth Post', content: 'This is the fourth post-content'}
  // ];

  @Input() posts: IPost[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
