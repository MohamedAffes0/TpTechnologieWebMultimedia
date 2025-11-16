import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../models/book';

@Component({
  standalone: true,
  selector: 'app-book-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './book-form.html',
  styleUrls: ['./book-form.css'],
})
export class BookForm {
  @Input() book: Book = {
    title: '',
    author: '',
    publisherEmail: '',
    publisherPhone: '',
    releaseDate: '',
    category: '',
    isAvailable: false,
    stock: 0
  };
  @Input() categories: string[] = [];
  @Output() saveBook = new EventEmitter<Book>();
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.saveBook.emit({...this.book});
      form.resetForm({
        isAvailable: false,
        stock: 0
      });
      this.book = {
        title: '',
        author: '',
        publisherEmail: '',
        publisherPhone: '',
        releaseDate: '',
        category: '',
        isAvailable: false,
        stock: 0
      };
    }
  }
}