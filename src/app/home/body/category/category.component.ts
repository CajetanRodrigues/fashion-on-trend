import { Component, OnInit } from '@angular/core';
import { WOW } from 'wow.js';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new WOW().init();
  }

}
