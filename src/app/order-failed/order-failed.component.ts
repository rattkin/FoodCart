import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-order-failed',
  templateUrl: './order-failed.component.html',
  styleUrls: ['./order-failed.component.css']
})
export class OrderFailedComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

}
