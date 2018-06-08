import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget/model';
import { WidgetsService } from '../../services/widgets.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  template: `{{ loadText }} <app-widget *ngFor="let widget of widgets | async" [model]="widget"></app-widget>`,
  styles: [':host {display: block;}'],
})
export class DashboardComponent implements OnInit {
  widgets: Observable<Widget[]>;
  loadText = 'Loading...';
  constructor(private ws: WidgetsService) {}

  ngOnInit() {
    this.widgets = this.ws.getWidgets().pipe(
      finalize(() => this.loadText = '')
    );
  }
}
