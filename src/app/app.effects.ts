import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { addToOrderWithoutSideDish, confirmOrder, OrderFailed, OrderSuccess, pickSideDish, removeFromOrder, showOrder } from './actions/order.actions';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { OrderFailedComponent } from './order-failed/order-failed.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { PickSideDishComponent } from './pick-side-dish/pick-side-dish.component';
import { selectComment, selectName, selectOrder, selectOrderTotal } from './state/selectors';
import { googleAnalytics } from './config';

declare let gtag: Function;


@Injectable()
export class AppEffects {

  constructor(
    private actions: Actions,
    private store: Store<any>,
    private SideDishDialog: MatDialog,
    private sideDishDialogRef: MatDialogRef<PickSideDishComponent>,
    private orderDialog: MatDialog,
    private orderDialogRef: MatDialogRef<OrderDialogComponent>,
    private http: HttpClient,
  ) { }

  showSideDishDialog: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(pickSideDish),
    tap(action => {
      if (action.item.sideDish !== undefined) {
        this.sideDishDialogRef = this.SideDishDialog.open(PickSideDishComponent, { data: { dish: action.item } });
      } else {
        this.store.dispatch(addToOrderWithoutSideDish({ item: action.item }));
      }
    })
  ), { dispatch: false });

  showOrder: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(showOrder),
    tap(action => {
      this.orderDialogRef = this.orderDialog.open(OrderDialogComponent);
    })
  ), { dispatch: false });

  closeOrderDialog: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(removeFromOrder),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(selectOrder))),
    )),
    switchMap(([action, order]) => {
      if (!order.length) {
        this.orderDialogRef.close();
      }
      return EMPTY;
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

      gtag('config', googleAnalytics, {
        page_path: '/confirmOrder'
      });

      gtag('event', 'purchase', {
        transaction_id: Math.random(),
        value: total,
        currency: 'CZK',
      });

      let message = name + ' chce:\n';
      order.forEach(item => message = message + item.name + '\n');
      message = message + 'Celkem: ' + total + ' Kč\n';
      message = message + 'Čas: ' + action.time + '\n';
      if (action.phone) { message = message + 'Telefon: ' + action.phone + '\n'; }
      if (comment) { message = message + '\nKomentář: ' + comment; }

      // TODO testing
      // return of(OrderSuccess());

      return this.http.post('https://rattkin.info/mail/mail.php', { mailData: message, user: name })
        .pipe(
          map(res => {
            if (res === 'OK') {
              // TODO google analytics
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
