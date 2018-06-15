import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  start = new Date();
  change: any;

  constructor() { }

  ngOnInit() {
  }

  _changing() {
    this.change = new Date(); // Math.random();
  }

}
