import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { Observable, of, EMPTY } from 'rxjs';
import { tap, concatMap, withLatestFrom, switchMap, map, catchError } from 'rxjs/operators';
import { addToOrder, pickSideDish, showOrder, confirmOrder, OrderSuccess, OrderFailed } from './actions/order.actions';
import { PickSideDishComponent } from './pick-side-dish/pick-side-dish.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { selectOrder, selectOrderTotal, selectName, selectComment } from './state/selectors';
import { HttpClient } from '@angular/common/http';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { OrderFailedComponent } from './order-failed/order-failed.component';

@Injectable()
export class AppEffects {

  constructor(
    private actions: Actions,
    private store: Store<any>,
    private SideDishDialog: MatDialog,
    private sideDishDialogRef: MatDialogRef<PickSideDishComponent>,
    private orderDialog: MatDialog,
    private orderDialogRef: MatDialogRef<PickSideDishComponent>,
    private http: HttpClient,
  ) { }

  showSideDishDialog: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(pickSideDish),
    tap(action => {
      this.sideDishDialogRef = this.SideDishDialog.open(PickSideDishComponent, { data: { dish: action.item } });
    })
  ), { dispatch: false });

  showOrder: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(showOrder),
    tap(action => {
      this.orderDialog.open(OrderDialogComponent, {
        height: '400px',
        width: '600px',
      });
    })
  ), { dispatch: false });


  confirmOrder: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(confirmOrder),
    concatMap(action => of(action).pipe(
      withLatestFrom(
        this.store.pipe(select(selectName)),
        this.store.pipe(select(selectComment)),
        this.store.pipe(select(selectOrder)),
        this.store.pipe(select(selectOrderTotal)),
      )
    )),
    switchMap(([action, name, comment, order, total]) => {
      let message = name + ' chce: <br>';
      order.forEach(item => message = message + item.name + '<br>');
      message = message + 'Celkem: ' + total + ' Kc';
      if (comment) { message = message + '<br>Komentar: ' + comment; }

      return this.http.post('https://rattkin.info/mail/mail.php', { mailData: message, user: name })
        .pipe(
          map(res => {
            console.log(res);
            if (res === 'OK') {
              return OrderSuccess();
            } else {
              return OrderFailed();
            }
          }),
        );
    }
    ),
    catchError((error) => {
      return of(OrderFailed());
    })
  ));

  OrderSuccess: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(OrderSuccess),
    tap(action => {
      this.orderDialog.open(OrderSuccessfulComponent, {
        height: '400px',
        width: '600px',
      });
    })
  ), { dispatch: false });

  OrderFailed: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(OrderFailed),
    tap(action => {
      this.orderDialog.open(OrderFailedComponent, {
        height: '400px',
        width: '600px',
      });
    })
  ), { dispatch: false });

}
