import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicComponent } from '../model';

@Component({
  selector: 'app-graph',
  template: `
    <p>
      graph works!
    </p>
  `,
  styles: []
})
export class GraphComponent implements OnInit, DynamicComponent {
  @Input() data: any;
  @Output() event = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
