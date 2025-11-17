import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Article {
  titre: string;
  contenu: string;
  importance?: string;
}

@Component({
  selector: 'app-articles',
  imports: [FormsModule, CommonModule],
  templateUrl: './articles.html',
  styleUrls: ['./articles.css']
})

export class ArticlesComponent {

  // Tableau d'articles
  articles: Article[] = [];

  // Champs pour ajouter un article
  newTitle = '';
  newContent = '';
  newImportance = '';

  // Ajout d’un nouvel article
  addArticle() {
    if (this.newTitle && this.newContent) {
      this.articles.push({
        titre: this.newTitle,
        contenu: this.newContent,
        importance: this.newImportance
      });

      // Réinitialisation
      this.newTitle = '';
      this.newContent = '';
      this.newImportance = 'moyenne';
    }
  }
}
