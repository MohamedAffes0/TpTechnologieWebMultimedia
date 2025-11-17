import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-taches',
  imports: [CommonModule],
  templateUrl: './taches.html',
  styleUrls: ['./taches.css']
})
export class TachesComponent {

  taches = [
    { description: 'Faire les courses', complete: false, priorite: 'haute' },
    { description: 'Réviser Angular', complete: true, priorite: 'moyenne' },
    { description: 'Faire du sport', complete: false, priorite: 'basse' }
  ];

  toggle(t: any) {
    t.complete = !t.complete;
  }
}
