import { Injectable } from '@angular/core';
import { Movie } from './movie.model'
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private webReqService: WebRequestService) { }


  getMovies() {
    return this.webReqService.get('movies');
  }

  getOneMovie(id: string){
    return this.webReqService.get(`movies/${id}`)
  }

  addMovie(movie: Movie) {
    return this.webReqService.post('movies', movie);
  }

  updateMovie(id: string, title: string, director: string, length: string, myRating: string, description: string) {
    let movie = {
      title,
      director,
      length,
      myRating,
      description
    }
    return this.webReqService.patch(`movies/${id}`, movie);
  }

  deleteMovie(id: string) {
    return this.webReqService.delete(`movies/${id}`);
  }
}
