import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IItem, IMenu, IOrderDetails } from 'src/app/core/interfaces/item.interface';
import { getOrders } from 'src/app/core/store/item.selectors';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];
  private orders!: IItem[];
  orderDetails!: IOrderDetails;

  constructor(
    private readonly store: Store<{ menu: IMenu }>,
  ) {}

  ngOnInit(): void {
    this.subscription.push(
      this.store.select(getOrders).subscribe({
        next: (orders) => {
          this.orders = orders;
        }
      }),
    );
  }

  private calculateOrderDetails(): void {

    this.orderDetails.totalPrice = this.orders.reduce((total, order) => {
      return order.price;
    }, 0)
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }
}
