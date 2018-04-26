import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evens: number[] = [];
  odds: number[] = [];

  onGameStarted(gameNumber: number) {
    if (gameNumber % 2 === 0) { // even
      this.evens.push(gameNumber);
    } else { // odd
      this.odds.push(gameNumber);
    }
  }
}
