import { Action, createReducer, MetaReducer, on } from '@ngrx/store';
import { addToOrder, removeFromOrder } from 'src/app/actions/order.actions';
import { SideDishes } from 'src/app/interfaces/side-dishes';
import { Soups } from 'src/app/interfaces/soups';
import { environment } from '../../../environments/environment';
import { Meal } from '../../interfaces/meal';
import { Menu } from '../../interfaces/menu';

export const mealFeatureKey = 'mealStore';

export const initialState: State = {
  date: new Date(),
  menu: Menu,
  sideDishes: SideDishes,
  soups: Soups,
  order: [],
  customer: undefined,
};

export interface State {
  date: Date;
  // TODO restrict date
  menu: Meal[];
  sideDishes: Meal[];
  soups: Meal[];
  order: Meal[];
  customer: any;
}

const mealReducer = createReducer(
  initialState,

  on(addToOrder, (state, { item: item, sideDish: sideDish }) => ({
    ...state,
    order: [...state.order, item, sideDish]

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


  // TODO remove
  on(removeFromOrder, (state, { item: payload }) => ({
    ...state,
    menu: [...state.menu.map(item => {

      if (item.name !== payload) {
        return item;
      } else {
        const quantity = item.orderQuantity - 1;
        return { ...item, orderQuantity: quantity };
      }
    })
    ]
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return mealReducer(state, action);
}


// export const reducers: ActionReducerMap<State> = {

// };


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
