import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectOrder, selectOrderTotal } from '../state/selectors';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PickSideDishComponent } from '../pick-side-dish/pick-side-dish.component';
import { addToOrder, confirmOrder } from '../actions/order.actions';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {

  public order = this.store.pipe(select(selectOrder));
  public total = this.store.pipe(select(selectOrderTotal));

  constructor(
    private store: Store<any>,
    public DialogRef: MatDialogRef<PickSideDishComponent>,
    // @Optional() @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.store.dispatch(confirmOrder());
    this.DialogRef.close();
  }

  checkClose() {
    this.DialogRef.close();
  }

}
