import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { changeMealFilter, changeOrderMethod } from '../actions/order.actions';
import { dayFormat, endDay, endMenuDay, endMenuTime, endTime, startDay, startMenuDay, startMenuTime, startTime, timeFormat } from '../config';
import { selectFilterType, selectMealClasses } from '../state/selectors';
import { isMenu, isOpen, isUntilMenuEnd, isBeforeOpen, isClosedDay, isAfterClose } from '../utils/date';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public mealClasses = this.store.pipe(select(selectMealClasses));
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
  public isBeforeOpen = isBeforeOpen(moment());
  public isClosedDay = isClosedDay(moment());
  public isAfterClose = isAfterClose(moment());
  public orderForm: FormGroup = this.formBuilder.group({
    orderMethod: ['']
  });

  public get orderMethod() { return this.orderForm.get('orderMethod'); }

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
  }

  methodChange() {
    this.store.dispatch(changeOrderMethod({ orderMethod: this.orderMethod.value }))
  }


  select(filter) {
    this.store.dispatch(changeMealFilter({ filterType: filter }));
  }


}
