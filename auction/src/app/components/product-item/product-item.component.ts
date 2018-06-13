import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit, OnChanges {
  @Input() model: any;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {}
}
