import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { changeMealFilter } from '../actions/order.actions';
import { selectFilterType } from '../state/selectors';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private store: Store<any>) { }
  public filterType = this.store.pipe(select(selectFilterType));

  ngOnInit(): void {
  }

  select(filter) {
    this.store.dispatch(changeMealFilter({ filterType: filter }));
  }

}
