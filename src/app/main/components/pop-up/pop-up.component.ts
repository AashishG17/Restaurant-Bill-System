import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { IItem, IMenu } from 'src/app/core/interfaces/item.interface';
import { ItemService } from 'src/app/core/services/item.service';
import { addOrder } from 'src/app/core/store/item.actions';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit, OnDestroy {
  item!: IItem;
  discountPercent!: number;

  constructor(
    private store: Store<{ menu: IMenu }>,
    private dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: IItem },
    private itemService: ItemService,
  ) {}

  ngOnInit(): void {
    this.item = this.data.item;
  }

  onSave(): void {
    const data = {
      ...this.item,
      price: this.item.price - this.calculateDiscount(),
      originalPrice: this.item.price,
      discount: this.calculateDiscount(),
    }
    this.store.dispatch(addOrder({ orders: data }));
    this.itemService.showSnackBar('Order Added!')
    this.dialogRef.close();
  }

  calculateDiscount(): number {
    const discount = this.discountPercent ? (this.discountPercent * this.item.price) / 100 : 0;
    return discount;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.dialogRef?.close();
  }
}
