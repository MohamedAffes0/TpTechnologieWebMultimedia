import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit',
  imports: [FormsModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class Produit {
  imageUrl: string = 'assets/produit.jpg';

  afficherAlerte() {
    alert('Produit ajouté au panier');
  }

  enStock: boolean = true;

  toggleStock() {
    this.enStock = !this.enStock;
  }

  @Input() nomProduit: string = 'Produit Par Défaut';
  @Output() ajouterAuPanier = new EventEmitter<string>();

  ajouterProduit() {
    this.ajouterAuPanier.emit(this.nomProduit);
  }

  prix: number = 1299.99;
}
