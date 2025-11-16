import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {
  @Input() books: Book[] = [];
  @Output() deleteBook = new EventEmitter<number>();
  @Output() updateBook = new EventEmitter<number>();

  trackById(index: number, book: Book) {
    return book.id;
  }

  onDelete(bookId: number) {
    this.deleteBook.emit(bookId);
  }

  onUpdate(bookId: number) {
    this.updateBook.emit(bookId);
  }
}
