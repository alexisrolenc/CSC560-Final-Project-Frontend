import { Injectable } from '@angular/core';
import { Book } from './book.model'
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private webReqService: WebRequestService) { }

  getBooks() {
    return this.webReqService.get('books');
  }

  getOneBook(id: string){
    return this.webReqService.get(`books/${id}`)
  }

  addBook(book: Book) {
    return this.webReqService.post('books', book);
  }

  updateBook(id: string, title: string, author: string, myRating: string, description: string) {
    let movie = {
      title,
      author,
      myRating,
      description
    }
    return this.webReqService.patch(`books/${id}`, movie);
  }

  deleteBook(id: string) {
    return this.webReqService.delete(`books/${id}`);
  }

  // getAll() {
  //   return this.books;
  // }

  // get(id: number){
  //   return this.books[id];
  // }

  // getId(book: Book){
  //   return this.books.indexOf(book);
  // }

  // addBook(book: Book){
  //   let newLength =this.books.push(book);
  //   let index = newLength - 1;
  //   return index;
  // }

  // update(id: number, title: string, author: string, myRating: string, description: string){
  //   let book =this.books[id];
  //   book.title = title;
  //   book.author = author;
  //   book.myRating = myRating;
  //   book.description = description;
  // }

  // delete(id: number){
  //   this.books.splice(id, 1);
  // }
}
