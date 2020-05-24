import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { changeMealFilter } from '../actions/order.actions';
import { dayFormat, endDay, endMenuDay, endMenuTime, endTime, startDay, startMenuDay, startMenuTime, startTime, timeFormat } from '../config';
import { MealClasses } from '../interfaces/mealClasses';
import { selectFilterType } from '../state/selectors';
import { isMenu, isOpen, isUntilMenuEnd } from '../utils/date';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public mealClasses = MealClasses;
  public filterType = this.store.pipe(select(selectFilterType));
  public openingTime = moment(startTime).format(timeFormat);
  public closingTime = moment(endTime).format(timeFormat);
  public openingMenuTime = moment(startMenuTime).format(timeFormat);
  public closingMenuTime = moment(endMenuTime).format(timeFormat);
  public startDay = moment(startDay).format(dayFormat);
  public endDay = moment(endDay).format(dayFormat);
  public startMenuDay = moment(startMenuDay).format('dd');
  public endMenuDay = moment(endMenuDay).format('dd');
  public isOpen = isOpen(moment());
  public isMenu = isMenu(moment());
  public isUntilMenu = isUntilMenuEnd(moment());

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
  }

  select(filter) {
    this.store.dispatch(changeMealFilter({ filterType: filter }));
  }


}
