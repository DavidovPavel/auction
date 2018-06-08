import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicComponent } from '../model';

@Component({
  selector: 'app-form',
  template: `
    <p>
      form works!
    </p>
    <p>
  <button (click)="_event($event)">event</button>
</p>
  `,
  styles: []
})
export class FormComponent implements OnInit, DynamicComponent {
  @Input() data: any;
  @Output() event = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  private _event() {
    this.event.emit({ name: 'event', data: this.data });
  }

}
