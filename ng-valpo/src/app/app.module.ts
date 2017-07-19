import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './post.service';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './wposts/post-list/post-list.component';
import { DetailsComponent } from './details/details.component';
import { PostSingleComponent } from './wposts/post-single/post-single.component'



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PostListComponent,
    DetailsComponent,
    PostSingleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    
  ],
  providers: [PostService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
