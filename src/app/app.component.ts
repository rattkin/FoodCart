import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { changeMealFilter } from './actions/order.actions';
import { isAfterClose, isBeforeOpen, isClosedDay, isMenu, isOpen, isUntilMenuEnd } from './utils/date';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;
  public isOpen = isOpen(moment());
  public isBeforeOpen = isBeforeOpen(moment());
  public isClosedDay = isClosedDay(moment());
  public isAfterClose = isAfterClose(moment());

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private store: Store<any>,
    private router: Router,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  ngOnInit(): void {

    this.router.navigate(['/']);


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
