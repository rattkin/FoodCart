import { Action, createReducer, MetaReducer, on } from '@ngrx/store';
// tslint:disable-next-line: max-line-length
import { addToOrderWithoutSideDish, addToOrderWithSideDish, changeMealFilter, confirmOrder, OrderSuccess, removeFromOrder, changeOrderMethod, sideNavToggle, sideNavOpen, sideNavClose, updateMediaQuery, OrderFailed } from 'src/app/actions/order.actions';
import { environment } from '../../../environments/environment';
import { Meal, MealClass } from '../../interfaces/meal';
import { Meals } from '../../interfaces/meals';
import { MealClasses } from 'src/app/interfaces/mealClasses';
import { endMenuTime, endTime, googleAnalytics, roundingFactor, startTime, timeFormat, timeToPrepareOrder, AllowedOrderMethods } from '../../config';


export const mealFeatureKey = 'mealStore';

export const initialState: MealState = {
  time: '',
  sideNavOpened: false,
  mobileQuery: undefined,
  meals: Meals,
  order: [],
  orderMethod: AllowedOrderMethods[0],
  email: undefined,
  phone: undefined,
  comment: undefined,
  filterType: 'home',
  mealClasses: MealClasses,
  progress: false,
};

export interface MealState {
  time: string;
  sideNavOpened: boolean;
  mobileQuery: boolean;
  meals: Meal[];
  order: Meal[];
  orderMethod: string;
  email: string;
  phone: string;
  comment: string;
  filterType: string;
  mealClasses: MealClass[];
  progress: boolean;
}

const mealReducer = createReducer(
  initialState,

  on(addToOrderWithSideDish, (state, { item, sideDish }) => ({
    ...state,
    order: [...state.order, { ...item, name: item.name + ' (' + sideDish.name + ')', sideDish: { ...sideDish } }]
  })),

  on(addToOrderWithoutSideDish, (state, { item, }) => ({
    ...state,
    order: [...state.order, { ...item }]
  })),

  on(changeOrderMethod, (state, { orderMethod }) => ({
    ...state,
    orderMethod,
  })),

  on(updateMediaQuery, (state, { mediaQuery }) => ({
    ...state,
    mobileQuery: mediaQuery
  })),

  on(sideNavToggle, (state) => ({
    ...state,
    sideNavOpened: !state.sideNavOpened
  })),

  on(sideNavOpen, (state) => ({
    ...state,
    sideNavOpened: true
  })),

  on(sideNavClose, (state) => ({
    ...state,
    sideNavOpened: false
  })),

  on(changeMealFilter, (state, { filterType }) => ({
    ...state,
    filterType
  })),

  on(confirmOrder, (state, { name, comment, orderMethod }) => ({
    ...state,
    email: name,
    comment,
    orderMethod,
    progress: true,
  })),

  on(OrderSuccess, () => (
    initialState
  )),

  on(OrderFailed, (state) => ({
    ...state,
    progress: false,
  })),

  on(removeFromOrder, (state, { item: payload }) => ({
    ...state,
    order: state.order.filter(item => state.order.indexOf(item) !== payload)
  })),
);

export function reducer(state: MealState | undefined, action: Action) {
  return mealReducer(state, action);
}

export const metaReducers: MetaReducer<MealState>[] = !environment.production ? [] : [];

export const getterMealFilter = (state: MealState) => state.filterType;
export const getterOrderMethod = (state: MealState) => state.orderMethod;
export const getterSideNavOpened = (state: MealState) => state.sideNavOpened;
export const getterMealClasses = (state: MealState) => state.mealClasses;
