import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";

import { ItemService } from "src/app/core/services/item.service";
import { LOAD_ITEMS, loadItemsSuccess } from "src/app/core/store/item.actions";
import { IItem } from "../interfaces/item.interface";

@Injectable()
export class ItemEffect {
    constructor(
        private actions$: Actions,
        private itemService: ItemService,
    ) {}
    
    itemEffect$ = createEffect(() => 
        this.actions$.pipe(
            ofType(LOAD_ITEMS),
            exhaustMap(() => 
                this.itemService.getItems().pipe(
                    map((data: IItem[]) => loadItemsSuccess({ items: data })),
                    catchError(() => EMPTY),
                ),
            ),
        ),
    );

}