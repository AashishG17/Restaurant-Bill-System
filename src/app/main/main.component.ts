import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { PopUpComponent } from 'src/app/main/components/pop-up/pop-up.component';
import { ItemInterface } from 'src/app/core/interfaces/item.interface';
import { ItemService } from 'src/app/core/services/item.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit, OnDestroy{
  popupDialog!: MatDialogRef<PopUpComponent>;
  items!: ItemInterface[];
  cartItems = [1,2,3,4,5,6,7,8,9]

  constructor(
    private readonly dialog: MatDialog,
    private readonly itemService: ItemService,
  ) {}

  ngOnInit(): void {
    this.items = this.itemService.items;
  }

  openPopup(item: any): void {
    this.popupDialog = this.dialog.open(PopUpComponent, {
      data: { name: 'hello', age: 12 }
    });
    console.log(item)
  }

  ngOnDestroy(): void {
    this.popupDialog.close();
  }

}
