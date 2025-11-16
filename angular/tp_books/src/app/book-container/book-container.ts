import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookList } from '../book-list/book-list';
import { BookForm } from '../book-form/book-form';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [BookList, BookForm, CommonModule, FormsModule],
  templateUrl: './book-container.html',
  styleUrls: ['./book-container.css']
})
export class BookContainer {
  books: Book[] = [];

  categories: string[] = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Biography', 'History', 'Children'];

  deleteBook(bookId: number) {
    this.books = this.books.filter(book => book.id !== bookId);
  }

  selectedBook: Book | null = null;

  addOrUpdateBook(book: Book) {
    if (this.selectedBook) {
      // UPDATE
      const index = this.books.findIndex(b => b.id === this.selectedBook!.id);
      if (index !== -1) {
        this.books[index] = { ...book, id: this.selectedBook.id }; // conserver l'ID
      }
      this.selectedBook = null; // revenir en mode ajout
    } else {
      // CREATE
      book.id = this.books.length > 0 ? Math.max(...this.books.map(b => b.id!)) + 1 : 1;
      this.books.push({ ...book });
    }
  }

  updateBook(bookId: number) {
    const bookToEdit = this.books.find(book => book.id === bookId);
    if (bookToEdit) {
      // Crée une copie pour ne pas modifier directement la liste
      this.selectedBook = { ...bookToEdit };
    }
  }

  searchText: string = '';

  get filteredBooks(): Book[] {
    if (!this.searchText) return this.books;
    const search = this.searchText.toLowerCase();
    return this.books.filter(book =>
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search)
    );
  }

  sortKey: '' | 'category' | 'isAvailable' = '';

  get sortedBooks(): Book[] {
    let list = this.filteredBooks;
    if (this.sortKey === 'category') {
      return list.slice().sort((a, b) => a.category.localeCompare(b.category));
    }
    if (this.sortKey === 'isAvailable') {
      return list.slice().sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    }
    return list;
  }
}
