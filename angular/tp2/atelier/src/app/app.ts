import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Utilisateur } from './utilisateur/utilisateur';
import { FormsModule } from '@angular/forms'
import { Profil } from './profil/profil';
import { AdresseComponent } from './composants/adresse/adresse.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Utilisateur, FormsModule, Profil, AdresseComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('atelier');
}

// Sans FormsModule, erreur :

// Can't bind to 'ngModel' since it isn't a known property of 'input'

// Rôle : Il fournit les directives de gestion de formulaires (comme ngModel).

// AppModule : Contient les métadonnées et déclare tous les composants et modules nécessaires à l’application.
