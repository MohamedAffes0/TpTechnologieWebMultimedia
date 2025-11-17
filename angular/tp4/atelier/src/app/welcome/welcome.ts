import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  imports: [FormsModule, CommonModule],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent {

  isLoggedIn: boolean = false;
  username: string = 'med';
  inputName: string = '';

  toggleLogin() {
    if (this.isLoggedIn) {
      this.isLoggedIn = !this.isLoggedIn;
      this.inputName = '';
      return;
    }
    if (this.inputName === this.username) {
      this.isLoggedIn = !this.isLoggedIn;
      this.inputName = '';
    } else {
      alert('Nom incorrect !');
      this.isLoggedIn = false;
    }
  }
}
