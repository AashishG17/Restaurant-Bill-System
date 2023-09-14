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
  private orders: IItem[] = [];
  orderDetails: IOrderDetails = {
    totalQuantity: 0,
    totalDiscount: 0,
    totalPrice: 0,
    netTotal: 0
  }

  constructor(
    private readonly store: Store<{ menu: IMenu }>,
  ) {}

  ngOnInit(): void {
    this.subscription.push(
      this.store.select(getOrders).subscribe({
        next: (orders) => {
          this.orders = orders;
          this.calculateOrderDetails();
        }
      }),
    );
  }

  private calculateOrderDetails(): void {
    this.orderDetails.totalQuantity = this.orders.length;
    this.orderDetails.totalPrice = this.orders.reduce((total, order) => {
      return (order.originalPrice ? order.originalPrice : 0) + total;
    }, 0);
    this.orderDetails.totalDiscount = this.orders.reduce((total, order) => {
      return (order.discount ? order.discount : 0) + total;
    }, 0);
    this.orderDetails.netTotal = this.orders.reduce((total, order) => {
      return order.price + total;
    }, 0);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }
}
