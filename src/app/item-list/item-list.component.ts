import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { pickSideDish } from '../actions/order.actions';
import { Meal } from '../interfaces/meal';
import { selectFilteredMeals } from '../state/selectors';
import { isAfterClose, isBeforeOpen, isClosedDay, isOpen } from '../utils/date';
import { googleAnalytics } from '../config';

// declare ga as a function to set and sent the events
declare let gtag: Function;

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  public menu = this.store.pipe(select(selectFilteredMeals));

  public isOpen = isOpen(moment());
  public isBeforeOpen = isBeforeOpen(moment());
  public isClosedDay = isClosedDay(moment());
  public isAfterClose = isAfterClose(moment());

  constructor(private store: Store<any>) { }

  ngOnInit(): void {

    gtag('config', googleAnalytics, {
      page_path: '/ItemListComponent'
    });
  }

  pickSideDish(orderItem: Meal, type: string) {
    this.store.dispatch(pickSideDish({ item: orderItem, itemType: type }));
  }
}
