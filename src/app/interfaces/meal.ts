export interface Meal {
    name?: string;
    description?: string;
    allergen?: string;
    weight?: string;
    price?: number;
    photo?: string;
    heat?: number;
    chosenHeat?: number;
    orderQuantity?: number;
    packaging?: number;
    sideDish?: Meal;
    tags?: string[];
    type?: 'meal' | 'side';
    class?: 'menu' |
    'soup' |
    'chicken' |
    'pork' |
    'starter' |
    'tandoor' |
    'lamb' |
    'pork' |
    'vege' |
    'fish' |
    'biryani' |
    'side'
    ;
}
