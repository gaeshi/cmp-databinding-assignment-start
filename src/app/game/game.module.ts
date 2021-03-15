import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameComponent } from './game.component';


@NgModule({
  declarations: [
    GameComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent
  ],
  exports: [
    GameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
