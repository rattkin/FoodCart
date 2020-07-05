import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { changeMealFilter, changeOrderMethod, changeLocation } from '../actions/order.actions';
// tslint:disable-next-line: max-line-length
import { dayFormat, endDay, endMenuDay, endMenuTime, endTime, startDay, startMenuDay, startMenuTime, startTime, timeFormat, AllowedOrderMethods, AllowedLocations } from '../config';
import { selectFilterType, selectMealClasses, selectOrderMethod, selectLocation } from '../state/selectors';
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
  public selectOrderMethod = this.store.pipe(select(selectOrderMethod));
  public selectLocation = this.store.pipe(select(selectLocation));
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
  public locationForm: FormGroup = this.formBuilder.group({
    location: ['']
  });
  public AllowedOrderMethods = AllowedOrderMethods;
  public AllowedLocations = AllowedLocations;

  public get orderMethod() { return this.orderForm.get('orderMethod'); }
  public get location() { return this.locationForm.get('location'); }

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.selectOrderMethod.subscribe(method =>
      this.orderForm.controls.orderMethod.setValue(method)
    );
    this.selectLocation.subscribe(location =>
      this.locationForm.controls.location.setValue(location)
    );
  }

  methodChange() {
    this.store.dispatch(changeOrderMethod({ orderMethod: this.orderMethod.value }));
  }

  locationChange() {
    this.store.dispatch(changeLocation({ location: this.location.value }));
  }

  select(filter: string) {
    this.store.dispatch(changeMealFilter({ filterType: filter }));
  }


}
