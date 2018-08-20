import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  prodCollectionRef: AngularFirestoreCollection<Product>;

  products$: Observable<Product[]>;

  constructor( private afs: AngularFirestore) {}

  ngOnInit() {
    this.prodCollectionRef = this.afs.collection('products', ref => ref.orderBy('position', 'asc'));
    this.products$ = this.prodCollectionRef.valueChanges();
  }
}
