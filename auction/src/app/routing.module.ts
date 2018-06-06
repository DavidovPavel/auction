import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routing = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routing)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
