import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';
import { changeOrderMethod, confirmOrder, removeFromOrder } from '../actions/order.actions';
import { endMenuTime, endTime, googleAnalytics, roundingFactor, startTime, timeFormat, timeToPrepareOrder } from '../config';
import { PickSideDishComponent } from '../pick-side-dish/pick-side-dish.component';
import { selectIsMenuItemPresent, selectOrder, selectOrderMethod, selectOrderTotal } from '../state/selectors';

// declare ga as a function to set and sent the events
declare let gtag: Function;

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {
  @ViewChild('picker') picker: NgxMaterialTimepickerComponent;
  public orderForm: FormGroup;
  public order = this.store.pipe(select(selectOrder));
  public total = this.store.pipe(select(selectOrderTotal));
  public isMenuPresent = this.store.pipe(select(selectIsMenuItemPresent));
  public selectOrderMethod = this.store.pipe(select(selectOrderMethod));
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
      orderMethod: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      phone: [''],
      comment: [''],
    });

    this.selectOrderMethod.subscribe(method =>
      this.orderForm.controls.orderMethod.setValue(method)
    );
  }

  methodChange() {
    this.store.dispatch(changeOrderMethod({ orderMethod: this.orderMethod.value }))
  }

  onSubmit() {
    if (!this.orderForm.valid) { return; }
    this.store.dispatch(confirmOrder({
      name: this.email.value,
      time: this.timePicker.value,
      phone: this.phone.value,
      comment: this.comment.value,
      orderMethod: this.orderMethod.value,
    }
    ));
    this.DialogRef.close();
    return false;
  }

  public get orderMethod() { return this.orderForm.get('orderMethod'); }
  public get email() { return this.orderForm.get('email'); }
  public get timePicker() { return this.orderForm.get('timePicker'); }
  public get phone() { return this.orderForm.get('phone'); }
  public get comment() { return this.orderForm.get('comment'); }

  checkClose() {
    this.DialogRef.close();
  }

  remove(orderItem: number) {
    this.store.dispatch(removeFromOrder({ item: orderItem }));
  }
}
