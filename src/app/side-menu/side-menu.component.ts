import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { changeMealFilter } from '../actions/order.actions';
import { selectFilterType } from '../state/selectors';
import * as moment from 'moment';
// tslint:disable-next-line: max-line-length
import { startTime, timeFormat, endTime, startDay, dayFormat, endDay, startMenuTime, endMenuTime, startMenuDay, endMenuDay } from '../config';
import { isOpen, isMenu, isUntilMenu } from '../utils/date';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private store: Store<any>) { }
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
  public isUntilMenu = isUntilMenu(moment());

  ngOnInit(): void {
  }

  select(filter) {
    this.store.dispatch(changeMealFilter({ filterType: filter }));
  }

}
