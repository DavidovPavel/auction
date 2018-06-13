import { Injectable } from '@angular/core';

import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';
import { switchMap } from 'rxjs/operators';

export interface Product {
  id: number;
  title: string;
  cost: number;
  raiting: number;
  reviews?: number;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProduct(id: number): Observable<Product> {
    return this.getProducts().pipe(switchMap(ps => ps.filter(p => p.id === id)));
  }
  constructor() {}

  getProducts(): Observable<Product[]> {
    return of([
      { id: 1, title: 'Title #1', cost: 50, raiting: 0, reviews: 0 },
      { id: 2, title: 'Title #2', cost: 50, raiting: 0, reviews: 0 },
      { id: 3, title: 'Title #3', cost: 50, raiting: 0 },
      { id: 4, title: 'Title #4', cost: 50, raiting: 0 },
      { id: 5, title: 'Title #5', cost: 50, raiting: 0 },
      { id: 6, title: 'Title #6', cost: 50, raiting: 0 },
      { id: 7, title: 'Title #7', cost: 50, raiting: 0 },
      { id: 8, title: 'Title #8', cost: 50, raiting: 0 },
    ]);
  }
}
