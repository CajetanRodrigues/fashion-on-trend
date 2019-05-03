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
import * as $ from 'jquery';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagPageComponent } from './home/body/category/tag-page/tag-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookmarkPageComponent } from './home/body/category/bookmark-page/bookmark-page.component';
import { CommentSectionComponent } from './home/body/category/comment-section/comment-section.component';
import { SimilarPostsComponent } from './home/body/category/similar-posts/similar-posts.component';
import { NewStoryComponent, BottomSheetOverviewExampleSheet } from './new-story/new-story.component';
import { MatBottomSheet } from '@angular/material';
import { CategoryService } from './services/category.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    SignupComponent,
    NewsletterComponent,
    TagPageComponent,
    BookmarkPageComponent,
    CommentSectionComponent,
    SimilarPostsComponent,
    NewStoryComponent,
    BottomSheetOverviewExampleSheet
      ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    AnimateOnScrollModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
    



  ],
  providers: [MatBottomSheet,CategoryService],
  bootstrap: [AppComponent],
  entryComponents : [BottomSheetOverviewExampleSheet]
})
export class AppModule { }
