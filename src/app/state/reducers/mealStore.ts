import { Action, createReducer, MetaReducer, on } from '@ngrx/store';
import { addToOrder, confirmOrder, removeFromOrder, OrderSuccess } from 'src/app/actions/order.actions';
import { SideDishes } from 'src/app/interfaces/side-dishes';
import { Soups } from 'src/app/interfaces/soups';
import { environment } from '../../../environments/environment';
import { Meal } from '../../interfaces/meal';
import { Menu } from '../../interfaces/menu';
const _ = require('lodash');

export const mealFeatureKey = 'mealStore';

export const initialState: State = {
  date: new Date(),
  menu: Menu,
  sideDishes: SideDishes,
  soups: Soups,
  order: [],
  name: undefined,
  comment: undefined,
};

export interface State {
  date: Date;
  // TODO restrict date
  menu: Meal[];
  sideDishes: Meal[];
  soups: Meal[];
  order: Meal[];
  name: string;
  comment: string;
}

const mealReducer = createReducer(
  initialState,

  on(addToOrder, (state, { item: item, sideDish: sideDish }) => ({
    ...state,
    order: [...state.order, { ...item, name: item.name + ' (' + sideDish.name + ')', sideDish: { ...sideDish } }]

    // menu: [...state.menu.map(item => {
    //   if (item.name !== payload) {
    //     return item;
    //   } else {
    //     let quantity = item.orderQuantity;
    //     if (quantity) {
    //       ++quantity;
    //     } else {
    //       quantity = 1;
    //     }
    //     return { ...item, orderQuantity: quantity };
    //   }
    // })
    // ]
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


  // TODO remove
  on(removeFromOrder, (state, { item: payload }) => ({
    ...state,
    order: state.order.filter(item => !_.isEqual(item, payload))
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return mealReducer(state, action);
}


// export const reducers: ActionReducerMap<State> = {

// };


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
