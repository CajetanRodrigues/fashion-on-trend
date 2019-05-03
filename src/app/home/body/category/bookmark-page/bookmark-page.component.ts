import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.scss']
})
export class BookmarkPageComponent implements OnInit {
  panelOpenState = false;
  items = [1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit() {
  }

}
