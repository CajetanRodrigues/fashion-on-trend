import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleBlogComponent } from './home/body/category/single-blog/single-blog.component';
import { ContactUsComponent } from './home/body/contact-us/contact-us.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'blog' , component : SingleBlogComponent},
  { path : 'contact' , component : ContactUsComponent},
  { path : 'inspiration', component : InspirationComponent},
  { path : 'login', component : LoginComponent},
  { path : 'signup', component : LoginComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
