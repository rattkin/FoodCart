import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectOrder, selectOrderTotal } from '../state/selectors';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public order = this.store.pipe(select(selectOrder));
  public total = this.store.pipe(select(selectOrderTotal));

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

}
