import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { sideNavToggle, updateMediaQuery } from './actions/order.actions';
import { endDay, startDay } from './config';
import { selectMobileQuery, selectOrder, selectSideNavOpened } from './state/selectors';
import { isAfterClose, isBeforeOpen, isClosedDay, isMenu, isOpen, isUntilMenuEnd } from './utils/date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sideNavOpened = this.store.pipe(select(selectSideNavOpened));
  public mobileQuery = this.store.pipe(select(selectMobileQuery));
  public order = this.store.pipe(select(selectOrder));
  private isOrder = false;
  public isMobile: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);

  constructor(
    private store: Store<any>,
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit(): void {
    this.isMobile.subscribe(result => {
      this.store.dispatch(updateMediaQuery({ mediaQuery: result.matches }));
    });

    this.order.subscribe(result => {
      if (result.length) {
        this.isOrder = true;
      } else {
        this.isOrder = false;
      }
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

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    if (this.isOrder) {
      const result = confirm('Ztratíte objednávku.');
      if (result) {
        // Do more processing...
      }
      event.returnValue = false; // stay on same page}
    }
  }
}
