import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-order-time',
  templateUrl: './order-time.component.html',
  styleUrls: ['./order-time.component.css']
})
export class OrderTimeComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

}
