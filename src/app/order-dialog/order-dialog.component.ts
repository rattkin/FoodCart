import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';
import { confirmOrder, removeFromOrder } from '../actions/order.actions';
import { endTime, roundingFactor, startTime, timeFormat, timeToPrepareOrder, endMenuTime, googleAnalytics } from '../config';
import { PickSideDishComponent } from '../pick-side-dish/pick-side-dish.component';
import { selectOrder, selectOrderTotal, selectIsMenuItemPresent } from '../state/selectors';

// declare ga as a function to set and sent the events
declare let gtag: Function;

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  @ViewChild('picker') picker: NgxMaterialTimepickerComponent;
  public orderForm: FormGroup;
  public order = this.store.pipe(select(selectOrder));
  public total = this.store.pipe(select(selectOrderTotal));
  public isMenuPresent = this.store.pipe(select(selectIsMenuItemPresent));
  public pickSoonest: string;
  public pickLatest: string;

  constructor(
    private store: Store<any>,
    public DialogRef: MatDialogRef<PickSideDishComponent>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    gtag('config', googleAnalytics, {
      page_path: '/OrderDialogComponent'
    });

    this.isMenuPresent.subscribe(isMenu => {
      if (isMenu) {
        this.pickLatest = endMenuTime.format(timeFormat).toString();
      } else {
        this.pickLatest = endTime.format(timeFormat).toString();
      }
    });

    const OrderTime = moment.max(
      moment().add(timeToPrepareOrder, 'minutes'),
      moment(startTime).add(timeToPrepareOrder, 'minutes'),
    );

    const roundedTime = moment(OrderTime).minute(Math.ceil(moment(OrderTime).minute() / roundingFactor) * roundingFactor).second(0);
    this.pickSoonest = roundedTime.format(timeFormat).toString();

    this.orderForm = this.formBuilder.group({
      timePicker: [this.pickSoonest],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      phone: [''],
      comment: [''],
    });
  }

  onSubmit() {
    // TODO enter key causes problems
    if (!this.orderForm.valid) { return; }

    this.store.dispatch(confirmOrder({
      name: this.orderForm.get('email').value,
      time: this.orderForm.get('timePicker').value,
      phone: this.orderForm.get('phone').value,
      comment: this.orderForm.get('comment').value,

    }
    ));
    this.DialogRef.close();
    return false;
  }

  checkClose() {
    this.DialogRef.close();
  }

  remove(orderItem: number) {
    this.store.dispatch(removeFromOrder({ item: orderItem }));
  }

  // TODO on mobile too big

}
