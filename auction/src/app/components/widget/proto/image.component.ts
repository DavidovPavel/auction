import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicComponent } from '../model';

@Component({
  selector: 'app-image',
  template: `
    <p>
      image works!
    </p>
  `,
  styles: []
})
export class ImageComponent implements OnInit, DynamicComponent {
  @Input() data: any;
  @Output() event = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
