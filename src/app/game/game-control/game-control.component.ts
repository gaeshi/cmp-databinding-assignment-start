import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  template: `
    <button class="btn btn-primary" (click)="onStart()">Start</button>
    <button class="btn btn-danger" (click)="onStop()">Stop</button>
  `
})
export class GameControlComponent {
  @Output() start = new EventEmitter();
  @Output() stop = new EventEmitter();

  public onStart = () => this.start.emit();
  public onStop = () => this.stop.emit();
}
