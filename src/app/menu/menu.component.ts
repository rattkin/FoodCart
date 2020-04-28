import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { pickSideDish } from '../actions/order.actions';
import { Meal } from '../interfaces/meal';
import { selectMenu } from '../state/selectors';

// declare ga as a function to set and sent the events
declare let gtag: Function;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menu = this.store.pipe(select(selectMenu));

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    gtag('send', 'pageview');
  }

  pickSideDish(orderItem: Meal) {
    this.store.dispatch(pickSideDish({ item: orderItem }));
  }
}
