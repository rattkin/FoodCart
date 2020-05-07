import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { confirmOrder, removeFromOrder } from '../actions/order.actions';
import { PickSideDishComponent } from '../pick-side-dish/pick-side-dish.component';
import { selectOrder, selectOrderTotal } from '../state/selectors';
import { Meal } from '../interfaces/meal';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';
import * as moment from 'moment';
import { startTime, endTime, timeFormat } from '../config';
import { isOpen } from '../utils/date';

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

  constructor(
    private store: Store<any>,
    public DialogRef: MatDialogRef<PickSideDishComponent>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    gtag('send', 'pageview');


    this.orderForm = this.formBuilder.group({
      timePicker: [''],
      // timeNow: [isOpen(moment())],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      phone: [''],
      comment: [''],
    });
    //  { validators: this.matchTimes });
  }

  onSubmit() {
    // TODO enter key causes problems
    if (!this.orderForm.valid) { return; }

    let time = '';
    if (!this.orderForm.get('timeNow').value) {
      time = this.orderForm.get('timePicker').value;
    }

    this.store.dispatch(confirmOrder({
      name: this.orderForm.get('email').value,
      comment: this.orderForm.get('comment').value,
      time,
      phone: this.orderForm.get('phone').value,

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


  matchTimes: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    const timePicker = group.get('timePicker');
    const timeNow = group.get('timeNow');

    if (timeNow.value || (timePicker.value !== '')) {
      return null;
    } else {
      return { pickTimeError: true };
    }
    // https://stackoverflow.com/questions/51605737/confirm-password-validation-in-angular-6
  }

  openPicker() {
    if (!this.orderForm.get('timePicker').value) {
      console.log('open picker');
      this.picker.open();
    }
  }

  // TODO on mobile too big

}
