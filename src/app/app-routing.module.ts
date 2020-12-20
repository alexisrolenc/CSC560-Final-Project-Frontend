import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { HobbyDetailsComponent } from './pages/hobby-details/hobby-details.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
  { path: '',  component: MainLayoutComponent, children: [
    { path: '',  component: ProfileComponent },
    {path: 'movie', component: MovieDetailsComponent },
    {path: 'movie/:_id', component: MovieDetailsComponent },
    {path: 'book', component: BookDetailsComponent },
    {path: 'book/:_id', component: BookDetailsComponent },
    {path: 'hobby', component: HobbyDetailsComponent },
    {path: 'hobby/:_id', component: HobbyDetailsComponent },

  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
