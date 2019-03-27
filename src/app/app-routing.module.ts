import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleBlogComponent } from './home/body/category/single-blog/single-blog.component';
import { ContactUsComponent } from './home/body/contact-us/contact-us.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'blog' , component : SingleBlogComponent},
  { path : 'contact' , component : ContactUsComponent},

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
