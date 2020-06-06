import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mealFeatureKey, MealState, getterMealFilter, getterOrderMethod, getterSideNavOpened, getterMealClasses } from './reducers/mealStore';
import { isUntilMenuEnd } from '../utils/date';
import * as moment from 'moment';

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

export const selectMealClasses = createSelector(
    selectMealState,
    (state) => state.mealClasses.filter(mealClass => {
        if (mealClass.code !== 'menu') {
            return true;
        } else if (isUntilMenuEnd(moment())) {
            return true;
        }
    })

);

export const selectSideDishes = createSelector(
    selectMealState,
    (state) => state.meals.filter(meal => meal.type === 'side')
);

export const selectMobileQuery = createSelector(
    selectMealState,
    (state) => state.mobileQuery
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

export const selectOrderMethod = createSelector(
    selectMealState,
    (state) => state.orderMethod
);

export const selectOrderTotal = createSelector(
    selectMealState,
    getterOrderMethod,
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

export const selectSideNavOpened = createSelector(
    selectMealState,
    (state) => {
        if (!state.mobileQuery) {
            return true;
        } else {
            return state.sideNavOpened;
        }
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
