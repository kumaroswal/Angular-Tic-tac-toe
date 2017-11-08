import { Component, Input } from '@angular/core';

@Component({
  selector: 'tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent {
  @Input()
  currentValue: string;
}
