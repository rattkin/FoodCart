import { createAction, props } from '@ngrx/store';
import { Meal } from '../interfaces/meal';

export const pickSideDish = createAction(
  'pickSideDish',
  props<{ item: Meal }>()
);

export const pickHeat = createAction(
  'pickHeat',
  props<{ item: Meal }>()
);

export const showOrder = createAction(
  'showOrder',
);

export const sideNavToggle = createAction(
  'sideNavToggle',
);

export const sideNavOpen = createAction(
  'sideNavOpen',
);

export const sideNavClose = createAction(
  'sideNavClose',
);

export const updateMediaQuery = createAction(
  'updateMediaQuery',
  props<{ mediaQuery: boolean; }>()
);

export const changeMealFilter = createAction(
  'changeMealFilter',
  props<{ filterType: string; }>()
);

export const changeOrderMethod = createAction(
  'changeOrderMethod',
  props<{ orderMethod: string; }>()
);

export const changeLocation = createAction(
  'changeLocation',
  props<{ location: string; }>()
);

export const addToOrderWithSideDish = createAction(
  'addToOrderWithSideDish',
  props<{ item: Meal; sideDish: Meal; }>()
);

export const addToOrderWithoutSideDish = createAction(
  'addToOrderWithoutSideDish',
  props<{ item: Meal; }>()
);

export const removeFromOrder = createAction(
  'removeFromOrder',
  props<{ item: number; }>()
);

export const confirmOrder = createAction(
  'confirmOrder',
  props<{
    name: string;
    phone: string;
    time: string;
    comment: string;
    orderMethod: string;
  }>(),
);

export const OrderSuccess = createAction(
  'OrderSuccess',
);

export const OrderFailed = createAction(
  'OrderFailed',
);


