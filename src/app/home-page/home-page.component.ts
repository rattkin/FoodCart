import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MealClass } from '../interfaces/meal';
import { MealClasses } from '../interfaces/mealClasses';
import { changeMealFilter } from '../actions/order.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public mealClasses = MealClasses;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
  }

  select(filter) {
    this.store.dispatch(changeMealFilter({ filterType: filter }));
  }


}
