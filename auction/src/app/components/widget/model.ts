import { EventEmitter } from '@angular/core';

export interface DynamicComponent {
  data: any;
  event: EventEmitter<any>;
}

export interface Widget {
  id: number;
  title: string;
  typeName: string;
  component?: any;
  width: number;
  height: number;
  position: { top: number; left: number };
}
