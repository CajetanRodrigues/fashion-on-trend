import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {
 array = [1,2,3,4,5];
  constructor() { }

  ngOnInit() {
  }

}
