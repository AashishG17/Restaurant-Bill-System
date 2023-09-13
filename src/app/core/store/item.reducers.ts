import { createReducer, on } from "@ngrx/store";

import { IMenu } from "src/app/core/interfaces/item.interface";
import { addOrder } from "./item.actions";

export const menu: IMenu  = {
    items: [],
    orders: [
        { id: 0, name: 'yes', thumbnail: 'yes', categoryId: 0, category: 'yes', price: 0, quantity: 1 }
    ],
};

export const menuReducer = createReducer(
    menu,
    // on(loadItems, (state, action) => {
    //     return {
    //         ...state,
    //         itemList: [...action.]
    //     }
    // }),
    on(addOrder, (state, action) => {
        if (state.orders.some(order => order.id === action.orders.id)) {
            return {
                ...state,
                orders: [...state.orders]
            }
        } else {
            action.orders.quantity = 1
            return {
                ...state,
                orders: [...state.orders, action.orders],
            }
        }
    }),
)