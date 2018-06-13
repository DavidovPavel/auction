import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private ps: ProductsService) {}

  ngOnInit() {
    this.products$ = this.ps.getProducts();
  }
}
