import { createAction, props } from '@ngrx/store';
import { Meal } from '../interfaces/meal';

export const pickSideDish = createAction(
  'pickSideDish',
  props<{ item: Meal; }>()
);

export const showOrder = createAction(
  'showOrder',
);

export const addToOrder = createAction(
  'addToOrder',
  props<{ item: Meal; sideDish: Meal; }>()
);

export const removeFromOrder = createAction(
  'removeFromOrder',
  props<{ item: Meal; }>()
);

export const confirmOrder = createAction(
  'confirmOrder',
  props<{ name: string; comment: string; }>(),
);

export const sendOrder = createAction(
  'sendOrder',
);

export const OrderSuccess = createAction(
  'OrderSuccess',
);
export const OrderFailed = createAction(
  'OrderFailed',
);


