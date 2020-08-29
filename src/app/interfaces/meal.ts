export interface Meal {
    name?: string;
    description?: string;
    descriptionCZ?: string;
    descriptionEN?: string;
    allergen?: string;
    weight?: string;
    price?: number;
    priceJH?: number;
    priceTR?: number;
    photo?: string;
    clPhoto?: string;
    heat?: number;
    chosenHeat?: number;
    orderQuantity?: number;
    packaging?: number;
    sideDish?: Meal;
    tags?: MealTags[];
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
    'side' |
    'drink'
    ;
}

export interface MealClass {
    code: string;
    name: string;
}

export enum MealTags {
    ChapatiOrRiceFree = 'Chapati or Rice free',
    Vegetarian = 'Vegetarian',
    New = 'New',
    ChefSpecial = 'Chef\'s Special'
}
