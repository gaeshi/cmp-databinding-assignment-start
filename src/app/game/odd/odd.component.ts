import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `<p [ngClass]="{'bg-primary': true}"> Odd - {{ number }}</p>`
})
export class OddComponent {
  @Input() public number: number | null;
}
