import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mealFeatureKey, MealState, getMealFilter, getOrderMethod } from './reducers/mealStore';

export const selectMealState = createFeatureSelector<MealState>(mealFeatureKey);

export const selectMeals = createSelector(
    selectMealState,
    (state) => state.meals
);

export const selectFilteredMeals = createSelector(
    selectMealState,
    (state) => state.meals.filter(meal => {
        if (meal.class === state.filterType) {
            if (meal.class !== 'menu') {
                return meal;
            } else if (meal.type === 'meal') {
                return meal;
            } else {
                return;
            }
        }
    })
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
    (state) => state.email
);

export const selectComment = createSelector(
    selectMealState,
    (state) => state.comment
);

export const selectOrderTotal = createSelector(
    selectMealState,
    getOrderMethod,
    (state) => {
        let total = 0;
        state.order.forEach(item => {

            if (item.price && !Number.isNaN(item.price)) {
                total = total + item.price;
            }

            if (state.orderMethod === 'takeout' && item.packaging && !Number.isNaN(item.packaging)) {
                total = total + item.packaging;
            }

            if (item.sideDish && item.sideDish.price) {
                total = total + item.sideDish.price;
            }

            if (state.orderMethod === 'takeout' && item.sideDish && item.sideDish.packaging) {
                total = total + item.sideDish.packaging;
            }
        });
        return total;
    }
);

export const selectIsMenuItemPresent = createSelector(
    selectMealState,
    (state) => {
        let menuPresent = false;
        state.order.forEach(item => {
            if (item.class === 'menu') {
                menuPresent = true;
            }
        });
        return menuPresent;
    }
);
