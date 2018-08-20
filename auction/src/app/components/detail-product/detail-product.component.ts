import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Review, Product } from '../../models';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
  prodCollectionRef: AngularFirestoreCollection<Product>;

  model$: Observable<Product>;
  reviews$: Observable<Review[]>;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const modelRef = this.afs.doc<Product>(`products/${id}`);
    this.model$ = modelRef.valueChanges();
    this.reviews$ = modelRef
      .collection<Review>('reviews')
      .valueChanges()
      .pipe(
        tap((a: Review[]) => {
          a.forEach(r => (r.date = new Date(r.date.seconds * 1000)));
        })
      );
  }
}
