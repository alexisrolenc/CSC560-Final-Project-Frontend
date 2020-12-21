import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/shared/movie.model';
import { MoviesService } from 'src/app/shared/movies.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  movieId: string;
  new: boolean;

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.movie = new Movie();
        if (params._id) {
          this.movieId = params._id;
          this.getOneMovie(this.movieId);
          this.new = false;
      } else {
          this.new = true;
      }
    });
  }

  onSubmit(form: NgForm) {
    if(this.new){
      this.addMovie(form.value);
    } else {
      this.updateMovie(this.movieId, form.value.title, form.value.director, form.value.length, form.value.myRating, form.value.description);
    }
    this.router.navigateByUrl('/');
  }

  addMovie(newMovie) {
    this.moviesService.addMovie(newMovie).subscribe((movie: Movie) => {
      console.log(movie);
    });
  }

  updateMovie(id, title, director, length, myRating, description) {
    this.moviesService.updateMovie(id, title, director, length, myRating, description).subscribe((movie: any) => {
      console.log(movie);
    });
  }

  getOneMovie(id) {
    this.moviesService.getOneMovie(id).subscribe((movie: Movie) => {
      this.movie = movie;
      console.log(movie);
    });
  }

  cancel(){
    this.router.navigateByUrl('/');
  }
}
