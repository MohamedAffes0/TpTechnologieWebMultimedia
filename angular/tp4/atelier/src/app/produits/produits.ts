import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  imports: [CommonModule],
  templateUrl: './produits.html',
  styleUrls: ['./produits.css']
})
export class ProduitsComponent {

  produits = [
    { nom: 'Produit A', stock: 80 },
    { nom: 'Produit B', stock: 40 },
    { nom: 'Produit C', stock: 10 }
  ];

  augmenterStock(p: any) {
    p.stock += 1;
  }

  diminuerStock(p: any) {
    if (p.stock > 0) p.stock -= 1;
  }
}
