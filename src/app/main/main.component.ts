import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { PopUpComponent } from 'src/app/main/components/pop-up/pop-up.component';
import { ICategory, IItem, IMenu } from 'src/app/core/interfaces/item.interface';
import { ItemService } from 'src/app/core/services/item.service';
import { getItems, getOrders } from 'src/app/core/store/item.selectors';
import { decOrder, delOrder, incOrder } from 'src/app/core/store/item.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  displayedColumns: string[] = ['name', 'price', 'quantity', 'subtotal', 'action'];
  currentPage: number = 1;
  itemsPerPage: number = 9;

  constructor(
    private readonly store: Store<{ menu: IMenu }>,
    private readonly dialog: MatDialog,
    private readonly itemService: ItemService,
    private readonly snackBar: MatSnackBar,
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

  get displayedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
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
    this.showSnackBar('Order Removed!');
  }

  showSnackBar(msg: string): void {
    this.snackBar.open(msg, 'Dismiss', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  getPaginationArray(): number[] {
    return new Array(this.totalPages()).fill(0).map((_, i) => i + 1)
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
