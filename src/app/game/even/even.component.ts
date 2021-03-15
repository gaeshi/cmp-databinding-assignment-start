import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `<p [ngStyle]="{backgroundColor: 'green', color: 'white', fontStyle: 'oblique'}">Even - {{number}}</p>`
})
export class EvenComponent {
  @Input() public number: number | null;
}
