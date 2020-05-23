import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MealClass } from '../interfaces/meal';
import { MealClasses } from '../interfaces/mealClasses';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public mealClasses = MealClasses;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

}
