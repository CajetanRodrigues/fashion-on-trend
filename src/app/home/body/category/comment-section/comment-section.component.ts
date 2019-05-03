import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
items = ['nejdnjewndke','jewndewnd','jhwdbjkewbdj','jehwdvewbd','hbedewbd']
comment : any
constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  createComment()
  {
    console.log(this.comment)
    this.items.push(this.comment)
    this.comment = ''
    this.openSnackBar("Published Successfully",'Close');
  }

}
