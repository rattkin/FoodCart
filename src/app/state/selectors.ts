import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mealFeatureKey, MealState, getMealFilter } from './reducers/mealStore';

export const selectMealState = createFeatureSelector<MealState>(mealFeatureKey);


export const selectMeals = createSelector(
    selectMealState,
    (state) => state.meals
);

export const selectFilteredMeals = createSelector(
    selectMealState,
    (state) => state.meals.filter(meal => meal.class === state.filterType)
);

export const selectFilterType = createSelector(
    selectMealState,
    (state) => state.filterType
);

export const selectSideDishes = createSelector(
    selectMealState,
    (state) => state.meals.filter(meal => meal.type === 'side')
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


