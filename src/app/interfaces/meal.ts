export interface Meal {
    name?: string;
    description?: string;
    allergen?: string;
    weight?: string;
    price?: number;
    photo?: string;
    orderQuantity?: number;
    packaging?: number;
    sideDish?: Meal;
    type?: 'menu' | 'side';
}
