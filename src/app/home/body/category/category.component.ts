import { Component, OnInit } from '@angular/core';
import { WOW } from 'wow.js';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  articles : any = []
  constructor(private categoryService : CategoryService) { }

  ngOnInit() {
    this.getArticles()
  }
  getArticles()
  {
    this.categoryService.getArticles().subscribe(
      (dataa:any) => {
        this.articles = dataa.data
        console.log("Article Array : " + JSON.stringify(this.articles))
      }
    )
  }

}
