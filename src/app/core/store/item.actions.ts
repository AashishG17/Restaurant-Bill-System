import { createAction, props } from "@ngrx/store";

import { IItem } from "src/app/core/interfaces/item.interface";


export const LOAD_ITEMS = '[Main Page] load items';

export const ADD_ORDERS = '[Main Page] add orders';

export const loadItems = createAction(
    LOAD_ITEMS, 
    props<{ items: IItem[] }>(),
);

export const addOrder = createAction(
    ADD_ORDERS,
    props<{ orders: IItem }>(),
)