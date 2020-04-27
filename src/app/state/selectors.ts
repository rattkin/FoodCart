import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mealFeatureKey, State } from './reducers/mealStore';

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

export const selectName = createSelector(
    selectMealState,
    (state) => state.name
);

export const selectComment = createSelector(
    selectMealState,
    (state) => state.comment
);

export const selectOrderTotal = createSelector(
    selectMealState,
    (state) => {
        let total = 0;
        state.order.forEach(item => {

            if (item.price && !Number.isNaN(item.price)) {
                total = total + item.price;
            }

            if (item.packaging && !Number.isNaN(item.packaging)) {
                total = total + item.packaging;
            }

            if (item.sideDish && item.sideDish.price) {
                total = total + item.sideDish.price;
            }

            if (item.sideDish && item.sideDish.packaging) {
                total = total + item.sideDish.packaging;
            }

        });
        return total;
    }
);


