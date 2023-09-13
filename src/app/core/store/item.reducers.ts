import { createReducer, on } from "@ngrx/store";

import { IMenu } from "src/app/core/interfaces/item.interface";
import { addOrder, decOrder, delOrder, incOrder } from "src/app/core/store/item.actions";

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
            const updatedOrder = { ...action.orders, quantity: 1 }
            return {
                ...state,
                orders: [...state.orders, updatedOrder],
            }
        }
    }),
    on(incOrder, (state, action) => {
        const updatedOrders = state.orders.map(order => {
            if (order.id === action.id) {
                return {
                    ...order,
                    quantity: order.quantity ? order.quantity + 1 : 1,
                };
            } else return order;
        });

        return {
            ...state,
            orders: updatedOrders
        }
    }),
    on(decOrder, (state, action) => {
        const updatedOrders = state.orders.map(order => {
            if (order.id === action.id) {
                return {
                    ...order,
                    quantity: order.quantity ? order.quantity - 1 : 1,
                };
            } else return order;
        });
        console.log(updatedOrders)

        return {
            ...state,
            orders: updatedOrders
        }
    }),
    on(delOrder, (state, action) => {
        const updatedOrders = state.orders.filter(order => {
            return order.id !== action.id;
        });

        return {
            ...state,
            orders: updatedOrders
        }
    }),
)