import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MovieCardComponent } from './cards/movie-card/movie-card.component';
import { BookCardComponent } from './cards/book-card/book-card.component';
import { HobbyCardComponent } from './cards/hobby-card/hobby-card.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { HobbyDetailsComponent } from './pages/hobby-details/hobby-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MainLayoutComponent,
    MovieCardComponent,
    BookCardComponent,
    HobbyCardComponent,
    MovieDetailsComponent,
    BookDetailsComponent,
    HobbyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
