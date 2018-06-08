import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDirective } from './dynamic.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DynamicDirective],
  exports: [DynamicDirective]
})
export class SharedModule { }
