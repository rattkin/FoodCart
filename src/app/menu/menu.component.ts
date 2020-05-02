import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { pickSideDish } from '../actions/order.actions';
import { Meal } from '../interfaces/meal';
import { selectMeals, selectFilteredMeals } from '../state/selectors';

// declare ga as a function to set and sent the events
declare let gtag: Function;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menu = this.store.pipe(select(selectFilteredMeals));

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    gtag('send', 'pageview');
  }

  pickSideDish(orderItem: Meal, type: string) {
    this.store.dispatch(pickSideDish({ item: orderItem, itemType: type }));
  }
}
