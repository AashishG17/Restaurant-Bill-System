import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IMenu } from "src/app/core/interfaces/item.interface";

const getMenuState = createFeatureSelector<IMenu>('menu');

export const getItems = createSelector(getMenuState, (state) => {
    return state.items;
});

export const getOrders = createSelector(getMenuState, (state) => {
    return state.orders;
});