import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBlogComponent } from './operations/create-blog/create-blog.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './home/body/body.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { CategoryComponent } from './home/body/category/category.component';
import { SingleBlogComponent } from './home/body/category/single-blog/single-blog.component';
import { FeaturesComponent } from './home/body/features/features.component';
import { TestimonialsComponent } from './home/body/testimonials/testimonials.component';
import { ContactUsComponent } from './home/body/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { MaterialModule } from './material/material.module';
import { InspirationComponent } from './inspiration/inspiration.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBlogComponent,
    HomeComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    SingleBlogComponent,
    FeaturesComponent,
    TestimonialsComponent,
    ContactUsComponent,
    InspirationComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    AnimateOnScrollModule.forRoot(),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
