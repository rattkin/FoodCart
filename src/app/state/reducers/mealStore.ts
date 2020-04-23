import { Action, createAction, createReducer, MetaReducer, on, props } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Meal } from '../../interfaces/meal';
import { Menu } from '../../interfaces/menu';
import { order, remove } from 'src/app/actions/order.actions';
import { SideDishes } from 'src/app/interfaces/side-dishes';
import { Soups } from 'src/app/interfaces/soups';

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

  on(order, (state, { item: item, sideDish: sideDish }) => ({
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
  on(remove, (state, { item: payload }) => ({
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
