import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../models/Book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books!: Book[];
  booksSubsciption!: Subscription;

constructor(private booksService: BooksService, private router: Router) { }

ngOnInit(): void {
  this.booksSubsciption = this.booksService.bookSubject.subscribe(
      (books: Book[]) => {this.books = books;}
  );
  this.booksService.getBooks();
  this.booksService.emitBooks();
}

ngOnDestroy() {
  this.booksSubsciption.unsubscribe();
}

onNewBook() {
  this.router.navigate(['/books', 'new']);
}

onDeleteBook(book: Book) {
  this.booksService.removeBook(book);
}

onViewBook(id: number) {
  this.router.navigate(['/books', 'view', id]);
}
}
