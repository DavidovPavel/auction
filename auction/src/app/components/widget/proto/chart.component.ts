import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicComponent } from '../model';

@Component({
  selector: 'app-chart',
  template: `
    <p>
      chart works!
    </p>
  `,
  styles: [],
})
export class ChartComponent implements OnInit, DynamicComponent {
  @Input() data: any;
  @Output() event = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
