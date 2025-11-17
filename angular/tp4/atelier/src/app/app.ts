import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles/articles';
import { ProduitsComponent } from './produits/produits';
import { TachesComponent } from './taches/taches';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeComponent, FormsModule, ArticlesComponent, ProduitsComponent, TachesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atelier');
}
