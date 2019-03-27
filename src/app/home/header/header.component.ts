import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'black',
        height: '120px'
      })),
      state('final', style({
        backgroundColor: 'black ',
        color : 'black',
        height: '70px'
      })),
      transition('initial<=>final', animate('400ms')),
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  currentState = 'initial';


@HostListener("window:scroll", ["$event"])
onWindowScroll() {
//In chrome and some browser scroll is given to body tag
let pos = (document.documentElement.scrollTop || document.body.scrollTop);
let max = document.documentElement.scrollHeight;
// pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
 if(pos < 200)   {
  this.currentState = 'initial'
 }
 else{
  this.currentState = 'final';

 }
}
}
