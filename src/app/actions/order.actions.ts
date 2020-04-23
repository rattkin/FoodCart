import { createAction, props } from '@ngrx/store';
import { Meal } from '../interfaces/meal';

export const pickSideDish = createAction(
  'pickSideDish',
  props<{ item: Meal; }>()
);

export const order = createAction(
  'order',
  props<{
    item: Meal;
    sideDish: Meal;
  }>()
);

export const remove = createAction(
  'remove',
  props<{ item: string; }>()
);




