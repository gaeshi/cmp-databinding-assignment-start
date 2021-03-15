import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  public numbers: number[] = [];
  private number = 0;
  private intervalRef: number | null;

  public startGame = () => {
    console.log('Game started');
    this.intervalRef = setInterval(() => {
      this.number++;
      this.numbers.push(this.number);
    }, 1000);
  }

  public stopGame = () => {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
    console.log('Game stopped');
  }
}
