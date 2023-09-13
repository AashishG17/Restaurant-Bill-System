import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";

import { ItemService } from "src/app/core/services/item.service";
import { LOAD_ITEMS, loadItems } from "src/app/core/store/item.actions";
import { IItem } from "../interfaces/item.interface";
import { Injectable } from "@angular/core";

@Injectable()
export class ItemEffect {

    constructor(
        private action$: Actions,
        private itemService: ItemService,
    ) {}

    itemEffect = createEffect(() => 
        this.action$.pipe(
            ofType(LOAD_ITEMS),
            exhaustMap((action) => {
                return this.itemService.getItems().pipe(
                    map((data: IItem[]) => {
                        return loadItems({ items: data });
                    }),
                    catchError(() => EMPTY),
                )
            }),
        ),
    );

}