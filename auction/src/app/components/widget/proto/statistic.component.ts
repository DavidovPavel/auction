import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DynamicComponent } from '../model';

@Component({
  selector: 'app-statistic',
  template: `
    <p>
      statistic works!
    </p>
  `,
  styles: []
})
export class StatisticComponent implements OnInit, DynamicComponent {
  @Input() data: any;
  @Output() event = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
