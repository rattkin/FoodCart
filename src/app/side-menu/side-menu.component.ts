import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { changeMealFilter } from '../actions/order.actions';
import { selectFilterType } from '../state/selectors';
import * as moment from 'moment';
import { openingTime, timeFormat, closingTime, startDay, dayFormat, endDay, openingMenuTime, closingMenuTime, startMenuDay, endMenuDay } from '../config';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private store: Store<any>) { }
  public filterType = this.store.pipe(select(selectFilterType));
  public openingTime = moment(openingTime).format(timeFormat);
  public closingTime = moment(closingTime).format(timeFormat);
  public openingMenuTime = moment(openingMenuTime).format(timeFormat);
  public closingMenuTime = moment(closingMenuTime).format(timeFormat);
  public startDay = moment(startDay).format(dayFormat);
  public endDay = moment(endDay).format(dayFormat);
  public startMenuDay = moment(startMenuDay).format('dd');
  public endMenuDay = moment(endMenuDay).format('dd');

  ngOnInit(): void {
  }

  select(filter) {
    this.store.dispatch(changeMealFilter({ filterType: filter }));
  }

}
