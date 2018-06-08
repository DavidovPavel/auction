import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicComponent } from '../model';

@Component({
  selector: 'app-text',
  template: `
    <p>
      text works!
    </p>
  `,
  styles: []
})
export class TextComponent implements OnInit, DynamicComponent {
  @Input() data: any;
  @Output() event = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
