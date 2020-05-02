import { Action, createReducer, MetaReducer, on } from '@ngrx/store';
import { addToOrderWithoutSideDish, addToOrderWithSideDish, changeMealFilter, confirmOrder, OrderSuccess, removeFromOrder } from 'src/app/actions/order.actions';
import { environment } from '../../../environments/environment';
import { Meal } from '../../interfaces/meal';
import { Meals } from '../../interfaces/meals';

export const mealFeatureKey = 'mealStore';

export const initialState: MealState = {
  date: new Date(),
  meals: Meals,
  order: [],
  name: undefined,
  comment: undefined,
  filterType: 'menu',
};

export interface MealState {
  date: Date;
  // TODO restrict date
  meals: Meal[];
  order: Meal[];
  name: string;
  comment: string;
  filterType: string;
}

const mealReducer = createReducer(
  initialState,

  on(addToOrderWithSideDish, (state, { item: item, sideDish: sideDish }) => ({
    ...state,
    order: [...state.order, { ...item, name: item.name + ' (' + sideDish.name + ')', sideDish: { ...sideDish } }]
  })),

  on(addToOrderWithoutSideDish, (state, { item: item, }) => ({
    ...state,
    order: [...state.order, { ...item }]
  })),

  on(changeMealFilter, (state, {filterType: filter}) => ({
    ...state,
    filterType: filter,
  })),

  on(confirmOrder, (state, { name: kdo, comment: text }) => ({
    ...state,
    // date: Date.now(),
    name: kdo,
    comment: text,
  })),

  on(OrderSuccess, () => (
    initialState
  )),

  on(removeFromOrder, (state, { item: payload }) => ({
    ...state,
    order: state.order.filter(item => state.order.indexOf(item) !== payload)
  })),
);

export function reducer(state: MealState | undefined, action: Action) {
  return mealReducer(state, action);
}

export const metaReducers: MetaReducer<MealState>[] = !environment.production ? [] : [];

export const getMealFilter = (state: MealState) => state.filterType;

