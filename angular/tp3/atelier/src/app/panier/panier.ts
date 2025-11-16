import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panier',
  imports: [],
  templateUrl: './panier.html',
  styleUrl: './panier.css'
})
export class Panier {
  @Input() items: string[] = [];
}
