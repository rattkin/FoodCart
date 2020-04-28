import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { confirmOrder, removeFromOrder } from '../actions/order.actions';
import { PickSideDishComponent } from '../pick-side-dish/pick-side-dish.component';
import { selectOrder, selectOrderTotal } from '../state/selectors';
import { Meal } from '../interfaces/meal';

// declare ga as a function to set and sent the events
declare let gtag: Function;

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  public usernameForm: FormGroup;
  public order = this.store.pipe(select(selectOrder));
  public total = this.store.pipe(select(selectOrderTotal));

  constructor(
    private store: Store<any>,
    public DialogRef: MatDialogRef<PickSideDishComponent>,
    private formBuilder: FormBuilder,

    // @Optional() @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
    gtag('send', 'pageview');

    this.usernameForm = this.formBuilder.group({
      formUsername: ['', [
        Validators.required,
        Validators.email,
      ]],
      formComment: [''],
    });
  }

  onSubmit() {
// TODO enter key causes problems
    if (!this.usernameForm.valid) { return; } // stop here if form is invalid or pending

    this.store.dispatch(confirmOrder({
      name: this.usernameForm.get('formUsername').value,
      comment: this.usernameForm.get('formComment').value
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

}
