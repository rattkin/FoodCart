import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { changeMealFilter } from '../actions/order.actions';
import { MealClasses } from '../interfaces/mealClasses';
import { selectFilterType } from '../state/selectors';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  public mealClasses = MealClasses;

  constructor(private store: Store<any>) { }
  public filterType = this.store.pipe(select(selectFilterType));

  ngOnInit(): void {
  }

  select(filter) {
    this.store.dispatch(changeMealFilter({ filterType: filter }));
  }

}
