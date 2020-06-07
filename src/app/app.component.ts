import { MediaMatcher, BreakpointState, Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as moment from 'moment';
import { isAfterClose, isBeforeOpen, isClosedDay, isMenu, isOpen, isUntilMenuEnd } from './utils/date';
import { selectSideNavOpened, selectMobileQuery } from './state/selectors';
import { sideNavToggle, updateMediaQuery } from './actions/order.actions';
import { Observable } from 'rxjs';
import { startDay, endDay } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public sideNavOpened = this.store.pipe(select(selectSideNavOpened));
  public mobileQuery = this.store.pipe(select(selectMobileQuery));
  public isMobile: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);

  constructor(
    private store: Store<any>,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.isMobile.subscribe(result => {
      this.store.dispatch(updateMediaQuery({ mediaQuery: result.matches }));
    });

    // debug
    console.log('now', moment().format('LLLL'));
    console.log('isOpen', isOpen(moment()));
    console.log('isMenu', isMenu(moment()));
    console.log('isBeforeOpen', isBeforeOpen(moment()));
    console.log('isAfterClose', isAfterClose(moment()));
    console.log('isClosedDay', isClosedDay(moment()));
    console.log('isUntilMenuEnd', isUntilMenuEnd(moment()));
    console.log('startDay', startDay);
    console.log('endDay', endDay);
  }

  sideNavToggle() {
    this.store.dispatch(sideNavToggle());
  }
}
