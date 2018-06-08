import { Injectable, Type } from '@angular/core';
import { Widget } from '../components/widget/model';
import { from } from 'rxjs/internal/observable/from';
import { ImageComponent } from '../components/widget/proto/image.component';

import { map, delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { FormComponent } from '../components/widget/proto/form.component';
import { GraphComponent } from '../components/widget/proto/graph.component';
import { TextComponent } from '../components/widget/proto/text.component';
import { ChartComponent } from '../components/widget/proto/chart.component';
import { StatisticComponent } from '../components/widget/proto/statistic.component';

const MapComponents = {
  image: ImageComponent,
  form: FormComponent,
  graph: GraphComponent,
  text: TextComponent,
  chart: ChartComponent,
  statistic: StatisticComponent
};

const WIDGETS_DATA: Widget[] = [
  { id: 1, title: 'Image widget', typeName: 'image', width: 200, height: 200, position: { top: 200, left: 200 } },
  { id: 2, title: 'Form widget', typeName: 'form', width: 200, height: 400, position: { top: 200, left: 200 } },
  { id: 3, title: 'Graph widget', typeName: 'graph', width: 400, height: 400, position: { top: 200, left: 200 } },
  { id: 4, title: 'Text widget', typeName: 'text', width: 400, height: 200, position: { top: 200, left: 200 } },
  { id: 5, title: 'Statictic widget', typeName: 'statistic', width: 200, height: 200, position: { top: 200, left: 200 } },
  { id: 6, title: 'Chart widget', typeName: 'chart', width: 200, height: 200, position: { top: 200, left: 200 } },
  { id: 7, title: 'Image widget', typeName: 'image', width: 200, height: 200, position: { top: 200, left: 200 } },
  { id: 8, title: 'Graph widget', typeName: 'graph', width: 200, height: 200, position: { top: 200, left: 200 } },
  { id: 9, title: 'Form widget', typeName: 'form', width: 200, height: 400, position: { top: 200, left: 200 } },
];

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  constructor() {}

  getWidgets(): Observable<Widget[]> {
    return of(WIDGETS_DATA).pipe(
      map(ws =>
        ws.map(w => {
          const widget = w as Widget;
          widget.component = MapComponents[w.typeName];
          return widget;
        })
      ),
      delay(1000)
    );
  }
}
