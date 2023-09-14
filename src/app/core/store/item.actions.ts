import { createAction, props } from "@ngrx/store";

import { IItem } from "src/app/core/interfaces/item.interface";


export const LOAD_ITEMS_SUCCESS = '[Main Page] load items success';
export const LOAD_ITEMS = '[Main Page] load items';

export const ADD_ORDERS = '[Main Page] add order';
const INC_ORDERS = '[Main Page] increase order';
const DEC_ORDERS = '[Main Page] decrease order';
const DEL_ORDERS = '[Main Page] delete order';

export const loadItemsSuccess = createAction(
    LOAD_ITEMS_SUCCESS, 
    props<{ items: IItem[] }>(),
);

export const loadItems = createAction(
    LOAD_ITEMS
);

export const addOrder = createAction(
    ADD_ORDERS,
    props<{ orders: IItem }>(),
)
export const incOrder = createAction(
    INC_ORDERS,
    props<{ id: number, quantity: number }>(),
)
export const decOrder = createAction(
    DEC_ORDERS,
    props<{ id: number, quantity: number }>(),
)
export const delOrder = createAction(
    DEL_ORDERS,
    props<{ id: number }>(),
)