export interface IItem {
    category: string;
    categoryId: number;
    id: number;
    name: string;
    price: number;
    thumbnail: string;
    quantity?: number;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface IMenu {
    items: IItem[],
    orders: IItem[],
}