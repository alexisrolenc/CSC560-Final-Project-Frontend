import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/shared/book.model';
import { BooksService } from 'src/app/shared/books.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  bookId: string;
  new: boolean;

  constructor(private booksService: BooksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.book = new Book();
        if (params._id) {
          this.bookId = params._id;
          this.getOneBook(this.bookId);
          this.new = false;
       } else {
          this.new = true;
       }
    });
  }

  onSubmit(form: NgForm) {
    if(this.new){
      this.addBook(form.value);
    } else {
      this.updateBook(this.bookId, form.value.title, form.value.author, form.value.myRating, form.value.description);
    }
    this.router.navigateByUrl('/');
  }

  addBook(newBook) {
    this.booksService.addBook(newBook).subscribe((book: Book) => {
      console.log(book);
    });
  }

  updateBook(id, title, author,  myRating, description) {
    this.booksService.updateBook(id, title, author, myRating, description).subscribe((book: any) => {
      console.log(book);
    });
  }

  getOneBook(id) {
    this.booksService.getOneBook(id).subscribe((book: Book) => {
      this.book = book;
      console.log(book);
    });
  }

  cancel(){
    this.router.navigateByUrl('/');
  }
}
