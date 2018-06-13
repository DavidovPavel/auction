import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  model$: Observable<Product>;


  constructor(private route: ActivatedRoute, private ps: ProductsService) { }

  ngOnInit() {
    const id  = this.route.snapshot.paramMap.get('id');
    this.model$ = this.ps.getProduct(+id);

  }

}
