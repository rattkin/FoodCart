import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
// tslint:disable-next-line: max-line-length
import { addToOrderWithoutSideDish, changeMealFilter, confirmOrder, OrderFailed, OrderSuccess, pickHeat, pickSideDish, removeFromOrder, showOrder } from './actions/order.actions';
import { googleAnalytics, emailServer } from './config';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { OrderFailedComponent } from './order-failed/order-failed.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { PickHeatComponent } from './pick-heat/pick-heat.component';
import { PickSideDishComponent } from './pick-side-dish/pick-side-dish.component';
import { selectComment, selectName, selectOrder, selectOrderMethod, selectOrderTotal, selectLocation } from './state/selectors';

declare let gtag: Function;

@Injectable()
export class AppEffects {

  constructor(
    private actions: Actions,
    private store: Store<any>,
    private SideDishDialog: MatDialog,
    private HeatDialog: MatDialog,
    private orderDialog: MatDialog,
    private dialogRef:
      MatDialogRef<PickSideDishComponent |
        PickHeatComponent |
        OrderDialogComponent |
        OrderSuccessfulComponent |
        OrderFailedComponent>,
    private http: HttpClient,
    private router: Router,
  ) { }

  showSideDishDialog: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(pickSideDish),
    tap(action => {
      if (action.item.sideDish !== undefined) {
        this.dialogRef = this.SideDishDialog.open(PickSideDishComponent, { data: { dish: action.item } });
      } else {
        this.store.dispatch(addToOrderWithoutSideDish({ item: action.item }));
      }
    })
  ), { dispatch: false });

  showHeatDialog: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(pickHeat),
    tap(action => {
      this.dialogRef = this.HeatDialog.open(PickHeatComponent, { data: { dish: action.item } });
    })
  ), { dispatch: false });

  showOrder: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(showOrder),
    tap(action => {
      this.dialogRef = this.orderDialog.open(OrderDialogComponent);
      gtag('config', googleAnalytics, {
        page_path: '/showOrder'
      });
    })
  ), { dispatch: false });

  addToOrder: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(addToOrderWithoutSideDish, addToOrderWithoutSideDish),
    tap(action => {
      gtag('config', googleAnalytics, {
        page_path: '/addToOrder/' + action.item.name
      });
    })
  ), { dispatch: false });

  changeMealFilter: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(changeMealFilter),
    tap(action => {
      if (action.filterType === 'home') {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/meal/' + action.filterType]);
        gtag('config', googleAnalytics, {
          page_path: '/changeMealFilter/' + action.filterType
        });
      }
    })
  ), { dispatch: false });

  closeOrderDialog: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(removeFromOrder),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(selectOrder))),
    )),
    switchMap(([action, order]) => {
      if (!order.length) {
        this.dialogRef.close();
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
        this.store.pipe(select(selectOrderMethod)),
        this.store.pipe(select(selectLocation))
      )
    )),
    switchMap(([action, name, comment, order, total, method, location]) => {

      let message = name + ' chce ' + method + ' do ' + location + ':\n';
      order.forEach(item => {
        message = message + item.name;
        if (item.weight) {
          message = message + ' ' + item.weight;
        }
        if (item.class === 'menu') {
          message = message + ' ' + '(menu)';
        }
        if (item.chosenHeat) {
          if (item.chosenHeat > 0) {
            message = message + ', Chilli +' + item.chosenHeat;
          } else {
            message = message + ', Chilli ' + item.chosenHeat;
          }
        }
        message = message + '\n';

      });
      message = message + 'Celkem: ' + total + ' Kč\n';
      message = message + 'Čas: ' + action.time + '\n';
      if (action.phone) { message = message + 'Telefon: ' + action.phone + '\n'; }
      if (comment) { message = message + '\nKomentář: ' + comment; }
      message = message + '\nObjednávka odeslána ' + moment().format();

      console.log(message);

      return this.http.post(emailServer, { mailData: message, user: name, location })
        .pipe(
          map(res => {
            if (res === 'OK') {
              return OrderSuccess();
            } else {
              return OrderFailed();
            }
          }),
        );
    }),
    catchError((error) => {
      return of(OrderFailed());
    })
  ));

  sendOrderAnalytics = createEffect(() => this.actions.pipe(
    ofType(confirmOrder),
    concatMap(action => of(action).pipe(
      withLatestFrom(
        this.store.pipe(select(selectOrder)),
        this.store.pipe(select(selectOrderTotal)),
        this.store.pipe(select(selectLocation)),
      )
    )),
    tap(([, order, total, location]) => {

      gtag('config', googleAnalytics, {
        page_path: '/confirmOrder'
      });

      const reportItems = [];

      order.forEach(item => {
        reportItems.push({
          id: item.name,
          name: item.name,
          category: item.class,
          brand: location,
          quantity: 1,
          price: item.price
        });
      });

      const report = {
        transaction_id: Math.random(),
        value: total,
        currency: 'CZK',
        items: reportItems,
      };
      console.log(report);
      gtag('event', 'purchase', report);
    }
    ),
  ), { dispatch: false });

  OrderSuccess: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(OrderSuccess),
    tap(() => {
      this.dialogRef.close();
      this.dialogRef = this.orderDialog.open(OrderSuccessfulComponent);
    })
  ), { dispatch: false });

  OrderFailed: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(OrderFailed),
    tap(action => {
      this.dialogRef.close();
      this.dialogRef = this.orderDialog.open(OrderFailedComponent);
    })
  ), { dispatch: false });

}
