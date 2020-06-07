import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { changeMealFilter, pickHeat, pickSideDish } from '../actions/order.actions';
import { googleAnalytics } from '../config';
import { Meal } from '../interfaces/meal';
import { selectFilteredMeals } from '../state/selectors';
import { isAfterClose, isClosedDay } from '../utils/date';

// declare ga as a function to set and sent the events
declare let gtag: Function;

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemListComponent implements OnInit {
  public menu = this.store.pipe(select(selectFilteredMeals));
  public isAfterClose = isAfterClose(moment());
  public isClosedDay = isClosedDay(moment());

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    gtag('config', googleAnalytics, {
      page_path: '/ItemListComponent'
    });

    this.route.url.subscribe(params => {
      this.store.dispatch(changeMealFilter({ filterType: params[1].path }));
    });
  }

  pickSideDish(orderItem: Meal) {
    this.store.dispatch(pickSideDish({ item: orderItem }));
  }

  pickHeat(orderItem: Meal) {
    this.store.dispatch(pickHeat({ item: orderItem }));
  }
}
