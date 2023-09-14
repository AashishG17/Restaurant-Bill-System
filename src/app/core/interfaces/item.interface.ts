export interface IItem {
    category: string;
    categoryId: number;
    id: number;
    name: string;
    price: number;
    thumbnail: string;
    quantity?: number;
    discount?: number;
    originalPrice?: number;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface IMenu {
    items: IItem[],
    orders: IItem[],
}

export interface IOrderDetails {
    totalQuantity: number;
    totalPrice: number;
    totalDiscount: number;
    netTotal: number;
}