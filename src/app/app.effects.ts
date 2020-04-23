import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { order, pickSideDish } from './actions/order.actions';
import { PickSideDishComponent } from './pick-side-dish/pick-side-dish.component';

@Injectable()
export class AppEffects {

  constructor(
    private actions: Actions,
    private cropDialog: MatDialog,
    private store: Store<any>,
    private cropDialogRef: MatDialogRef<PickSideDishComponent>,
  ) { }

  pickSideDish: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(pickSideDish),
    tap(action => {
      this.cropDialogRef = this.cropDialog.open(PickSideDishComponent, { data: { dish: action.item } });
    })
  ), { dispatch: false });

}
