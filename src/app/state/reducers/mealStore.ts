import { Action, createAction, createReducer, MetaReducer, on, props } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Meal } from '../../interfaces/meal';
import { Menu } from '../../interfaces/menu';

export const mealFeatureKey = 'mealStore';

export const initialState: State = {
  date: new Date(),
  menu: Menu,
  meals: undefined,
  customer: undefined,
};

export interface State {
  date: Date;
  // TODO restrict date
  menu: Meal[];
  meals: Meal[];
  customer: any;
}

export const pickMeal = createAction(
  'pick meal',
  props<{ meal: Meal; quantity: number }>()
);

export const confirmOrder = createAction(
  'confirm order',
);


const mealReducer = createReducer(
  initialState,
  on(pickMeal, state => ({ ...state, })),
);

export function reducer(state: State | undefined, action: Action) {
  return mealReducer(state, action);
}


// export const reducers: ActionReducerMap<State> = {

// };


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
