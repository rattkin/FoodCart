import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducers/mealStore';

export const selectMealState = createFeatureSelector<State>('meals');

export const selectMenu = createSelector(selectMealState, (state) => state.menu);
