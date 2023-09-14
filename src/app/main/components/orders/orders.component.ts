import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { IItem, IMenu } from 'src/app/core/interfaces/item.interface';
import { ItemService } from 'src/app/core/services/item.service';
import { decOrder, delOrder, incOrder } from 'src/app/core/store/item.actions';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @Input() orders!: IItem[];
  displayedColumns: string[] = ['name', 'price', 'quantity', 'subtotal', 'action'];

  constructor(
    private readonly store: Store<{ menu: IMenu }>,
    private readonly itemService: ItemService,
  ) {}

  increaseQuantity(id: number, qty?: number): void {
    this.store.dispatch(incOrder({ id: id, quantity: qty ? qty : 1 }));
  }

  decreaseQuantity(id: number, qty?: number): void {
    if (qty && qty > 1) this.store.dispatch(decOrder({ id: id, quantity: qty ? qty : 1 }));
  }

  deleteOrder(id: number): void {
    this.store.dispatch(delOrder({ id: id }));
    this.itemService.showSnackBar('Order Removed!');
  }
}
