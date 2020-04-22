import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, mealFeatureKey } from './reducers/mealStore';

export const selectMealState = createFeatureSelector<State>(mealFeatureKey);

export const selectMenu = createSelector(
    selectMealState,
     (state) => state.menu
     );


