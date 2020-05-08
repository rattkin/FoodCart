import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { isUntilMenuEnd, isBeforeOpen, isOpen, isMenu, isAfterClose, isClosedDay } from './utils/date';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { changeMealFilter } from './actions/order.actions';
import { endMenuDay, startMenuDay } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private store: Store<any>,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    if (
      isUntilMenuEnd(moment())
    ) {
      this.store.dispatch(changeMealFilter({ filterType: 'menu' }));

    }

    // debug
    console.log('now', moment().format('LLLL'));
    console.log('isOpen', isOpen(moment()));
    console.log('isMenu', isMenu(moment()));
    console.log('isBeforeOpen', isBeforeOpen(moment()));
    console.log('isAfterClose', isAfterClose(moment()));
    console.log('isClosedDay', isClosedDay(moment()));
    console.log('isUntilMenuEnd', isUntilMenuEnd(moment()));

  }
}

// TODO deprecated
