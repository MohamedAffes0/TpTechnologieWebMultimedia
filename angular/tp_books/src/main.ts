import { bootstrapApplication } from '@angular/platform-browser';
import { BookContainer } from './app/book-container/book-container';

bootstrapApplication(BookContainer)
  .catch(err => console.error(err));
