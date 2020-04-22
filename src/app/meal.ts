export interface Meal {
    name: string;
    description: string;
    price: number;
    photo?: string;
    orderQuantity?: number;
    sideDish?: SideDish;
}

export interface SideDish {
    name: string;
    description: string;
    price: number;
    photo?: string;
}
