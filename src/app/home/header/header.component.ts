import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'white',
        height: '120px'
      })),
      state('final', style({
        backgroundColor: 'white ',
        color : 'black',
        height: '90px'
      })),
      transition('initial<=>final', animate('400ms')),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  isOpened = false;
  value = ""
  constructor(@Inject(DOCUMENT) document) { }

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
 openNav() {
   
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.height = "100%";

}

/* Close/hide the sidenav */
 closeNav() {
  
  document.getElementById("mySidenav").style.width = "0";
}
toggle(){
  if(this.isOpened==false){
    this.openNav();
    this.isOpened = true;
  }
  else{
    this.closeNav();
    this.isOpened = false;
  }
}
}
