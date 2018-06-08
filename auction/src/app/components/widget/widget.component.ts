import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, EventEmitter } from '@angular/core';
import { DynamicDirective } from '../../shared/dynamic.directive';
import { DynamicComponent, Widget } from './model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  @Input() model: Widget;
  @ViewChild(DynamicDirective) dynamic: DynamicDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.model.component);
    const containerRef = this.dynamic.viewRef;
    containerRef.clear();

    const componentRef = containerRef.createComponent(componentFactory);
    const instance = <DynamicComponent>componentRef.instance;

    instance.data = this.model;
    instance.event.subscribe(data => console.log(data));
  }
}
