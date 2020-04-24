import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { addToOrder, pickSideDish, showOrder } from './actions/order.actions';
import { PickSideDishComponent } from './pick-side-dish/pick-side-dish.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';

@Injectable()
export class AppEffects {

  constructor(
    private actions: Actions,
    private store: Store<any>,
    private SideDishDialog: MatDialog,
    private sideDishDialogRef: MatDialogRef<PickSideDishComponent>,
    private orderDialog: MatDialog,
    private orderDialogRef: MatDialogRef<PickSideDishComponent>,
  ) { }

  pickSideDish: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(pickSideDish),
    tap(action => {
      this.sideDishDialogRef = this.SideDishDialog.open(PickSideDishComponent, { data: { dish: action.item } });
    })
  ), { dispatch: false });

  showOrder: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(showOrder),
    tap(action => {
      this.orderDialog.open(OrderDialogComponent);
    })
  ), { dispatch: false });

}
