import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie.model';
import { Book } from 'src/app/shared/book.model';
import { Hobby } from 'src/app/shared/hobby.model';
import { MoviesService } from 'src/app/shared/movies.service';
import { HobbiesService } from 'src/app/shared/hobbies.service';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  movies!: Movie[];
  books!: Book[];
  hobbies!: Hobby[];

  constructor(private moviesService: MoviesService, private booksService: BooksService, private hobbiesService: HobbiesService, private router: Router) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies: any) => {
      this.movies=movies;
    })

    this.booksService.getBooks().subscribe((books: any) => {
      this.books=books;
    })

    this.hobbiesService.getHobbies().subscribe((hobbies: any) => {
      this.hobbies=hobbies;
  
    })
  }

  deleteMovie(id: string) {
    this.moviesService.deleteMovie(id).subscribe((movie: Movie) => {
      this.ngOnInit(); //have to force reload to make deleted object no longer render
      console.log(movie);
    });
  }

  deleteBook(id: string) {
    this.booksService.deleteBook(id).subscribe((book: Book) => {
      this.ngOnInit(); //have to force reload to make deleted object no longer render
      console.log(book);
    });
  }

  deleteHobby(id: string) {
    this.hobbiesService.deleteHobby(id).subscribe((hobby: Hobby) => {
      this.ngOnInit(); //have to force reload to make deleted object no longer render
      console.log(hobby);
    });
  }
}
