import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as moment from 'moment';
import { isUntilMenuEnd } from '../utils/date';
import { getterOrderMethod, mealFeatureKey, MealState } from './reducers/mealStore';

export const selectMealState = createFeatureSelector<MealState>(mealFeatureKey);

export const selectMeals = createSelector(
    selectMealState,
    (state) => state.meals
);

export const selectFilteredMeals = createSelector(
    selectMealState,
    (state) => state.meals
        .filter(meal => (meal.class === state.filterType))         // return meals belonging to filter
        .filter(meal => (meal.class !== 'menu' || meal.type === 'meal'))        // filter menu and side-dish
        // if local price is set
        .filter(meal => (
            state.location === 'JH' && meal.priceJH ||
            state.location === 'TR' && meal.priceTR))
        .map(meal => {
            if (state.location === 'JH') {
                return {
                    ...meal,
                    price: meal.priceJH
                };
            }
            if (state.location === 'TR') {
                return {
                    ...meal,
                    price: meal.priceTR
                };
            }
        }).map(meal => {
            if (state.language === 'CZ') {
                return {
                    ...meal,
                    description: meal.descriptionCZ
                };
            }
            if (state.language === 'EN') {
                return {
                    ...meal,
                    description: meal.descriptionEN
                };
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
    (state) => state.meals
        .filter(meal => meal.type === 'side')
        // if local price is set
        .filter(meal => (
            state.location === 'JH' && meal.priceJH ||
            state.location === 'TR' && meal.priceTR))
        .map(meal => {
            if (state.location === 'JH') {
                return {
                    ...meal,
                    price: meal.priceJH
                };
            }
            if (state.location === 'TR') {
                return {
                    ...meal,
                    price: meal.priceTR
                };
            }
        }).map(meal => {
            if (state.language === 'CZ') {
                return {
                    ...meal,
                    description: meal.descriptionCZ
                };
            }
            if (state.language === 'EN') {
                if (meal.descriptionEN) {
                    return {
                        ...meal,
                        description: meal.descriptionEN
                    };
                } else {
                    return {
                        ...meal,
                        description: meal.descriptionCZ
                    };

                }
            }
        })
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

export const selectProgress = createSelector(
    selectMealState,
    (state) => state.progress
);

export const selectOrderMethod = createSelector(
    selectMealState,
    (state) => state.orderMethod
);

export const selectLocation = createSelector(
    selectMealState,
    (state) => state.location
);

export const selectShowPackaging = createSelector(
    selectMealState,
    (state) => {
        if (state.orderMethod === 'restaurant') {
            return false;
        } else {
            return true;
        }
    }
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
