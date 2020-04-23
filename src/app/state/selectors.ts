import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, mealFeatureKey } from './reducers/mealStore';

export const selectMealState = createFeatureSelector<State>(mealFeatureKey);

export const selectMenu = createSelector(
    selectMealState,
    (state) => state.menu
);

export const selectSideDishes = createSelector(
    selectMealState,
    (state) => state.sideDishes
);

export const selectOrder = createSelector(
    selectMealState,
    (state) => state.order
);

export const selectOrderTotal = createSelector(
    selectMealState,
    (state) => {
        let total = 0;
        console.log(total);
        state.order.forEach(item => {
            console.log(item.price, item.packaging);

            if (item.price && !Number.isNaN(item.price)) {
                total = total + item.price;
            }

            if (item.packaging && !Number.isNaN(item.packaging)) {
                total = total + item.packaging;
            }
            console.log(total);

        });
        return total;
    }
);


