import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PostSingleComponent } from './wposts/post-single/post-single.component';
import { PostListComponent } from './wposts/post-list/post-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'details/:id', component: DetailsComponent },
   {
    path: './cat',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: ':slug',
    component: PostSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
