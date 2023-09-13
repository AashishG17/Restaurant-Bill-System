import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { PopUpComponent } from 'src/app/main/components/pop-up/pop-up.component';
import { ICategory, IItem, IMenu } from 'src/app/core/interfaces/item.interface';
import { ItemService } from 'src/app/core/services/item.service';
import { getItems, getOrders } from 'src/app/core/store/item.selectors';
import { decOrder, delOrder, incOrder } from 'src/app/core/store/item.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit, OnDestroy{
  popupDialog!: MatDialogRef<PopUpComponent>;
  subscription: Subscription[] = [];
  items!: IItem[];
  orders!: IItem[];
  categories!: ICategory[];

  constructor(
    private readonly store: Store<{ menu: IMenu }>,
    private readonly dialog: MatDialog,
    private readonly itemService: ItemService,
  ) {}

  ngOnInit(): void {
    this.getDataFromStore();
    this.getItems();
    this.getCategories();
  }

  getDataFromStore(): void {
    this.subscription.push(
      this.store.select(getItems).subscribe({
        next: (data) => {
          console.log('from item', data)
        }
      }),
      this.store.select(getOrders).subscribe({
        next: (data) => {
          this.orders = data;
        }
      }),
    );
  }

  getItems(): void {
    this.subscription.push(
      this.itemService.getItems().subscribe({
        next: (response: IItem[]) => {
          this.items = response;
        }
      }),
    )
  }

  getCategories(): void {
    this.subscription.push(
      this.itemService.getCategories()
        .subscribe({
          next: (response: ICategory[]) => {
            this.categories = response;
          }
        }),
    )
  }

  changeCategory(category?: string): void {
    const items = this.items.filter((item: IItem) => {
      if (item.category === category) {
        return item;
      }
      return this.items;
    });
    this.items = items;
  }

  increaseQuantity(id: number, qty?: number): void {
    this.store.dispatch(incOrder({ id: id, quantity: qty ? qty : 1 }));
  }

  decreaseQuantity(id: number, qty?: number): void {
    if (qty && qty > 1) this.store.dispatch(decOrder({ id: id, quantity: qty ? qty : 1 }));
  }

  deleteOrder(id: number): void {
    this.store.dispatch(delOrder({ id: id }));
  }

  openPopup(item: any): void {
    this.popupDialog = this.dialog.open(PopUpComponent, {
      data: { item }
    });
  }

  ngOnDestroy(): void {
    this.popupDialog.close();
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }

}
