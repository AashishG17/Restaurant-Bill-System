import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { PopUpComponent } from 'src/app/main/components/pop-up/pop-up.component';
import { ICategory, IItem, IMenu } from 'src/app/core/interfaces/item.interface';
import { ItemService } from 'src/app/core/services/item.service';
import { getItems, getOrders } from 'src/app/core/store/item.selectors';
import { decOrder, delOrder, incOrder, loadItems } from 'src/app/core/store/item.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit, OnDestroy{
  popupDialog!: MatDialogRef<PopUpComponent>;
  subscription: Subscription[] = [];
  private items!: IItem[];
  displayedItems!: IItem[];
  orders!: IItem[];
  categories!: ICategory[];
  selectedCategory!: string;
  menuListColSpan:number = 5;
  menuItemColSpan:number = 7;
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalPage: number = 1;

  @HostListener('window:resize') windowResize() {
    let windowWidth = window.innerWidth;

    if(windowWidth<850){
      this.menuListColSpan = 12;
      this.menuItemColSpan = 12;
    }else{
      this.menuListColSpan = 5;
      this.menuItemColSpan = 7;
    }
  }

  constructor(
    private readonly store: Store<{ menu: IMenu }>,
    private readonly dialog: MatDialog,
    private readonly itemService: ItemService,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadItems());
    this.getDataFromStore();
    this.getCategories();
  }

  getDataFromStore(): void {
    this.subscription.push(
      this.store.select(getItems).subscribe({
        next: (data) => {
          this.items = data;
          this.displayedItems = data;
          this.selectedCategory = 'all';
          this.totalPages();
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
    return this.displayedItems?.slice(startIndex, endIndex);
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
    if (category) {
      const items = this.items.filter((item: IItem) => {
        if (item.category === category) {
          return item;
        }
        return;
      });
      this.selectedCategory = category;
      this.displayedItems = items;
    } else {
      this.displayedItems = this.items;
      this.selectedCategory = 'all';
    }
    this.currentPage = 1;
    this.totalPages();
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
    const total = Math.ceil(this.displayedItems.length / this.itemsPerPage);
    this.totalPage = total;
    return total;
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
