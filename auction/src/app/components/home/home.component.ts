import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductsService } from '../../services/products.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  prodCollectionRef: AngularFirestoreCollection<Product>;

  products$: Observable<Product[]>;

  constructor(private ps: ProductsService, private afs: AngularFirestore) {}

  ngOnInit() {
    this.prodCollectionRef = this.afs.collection('products', ref => ref.orderBy('id', 'asc'));
    this.products$ = this.prodCollectionRef.valueChanges();
  }
}
