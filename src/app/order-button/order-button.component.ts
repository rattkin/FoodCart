import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { showOrder } from '../actions/order.actions';
import { selectOrderTotal } from '../state/selectors';

@Component({
  selector: 'app-order-button',
  templateUrl: './order-button.component.html',
  styleUrls: ['./order-button.component.css']
})
export class OrderListComponent implements OnInit {

  public total = this.store.pipe(select(selectOrderTotal));

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit(): void {
  }

  showOrder() {
    this.store.dispatch(showOrder());
  }
}
