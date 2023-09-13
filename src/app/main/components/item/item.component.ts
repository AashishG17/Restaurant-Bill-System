import { Component, Input, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { IItem } from 'src/app/core/interfaces/item.interface';
import { ItemService } from 'src/app/core/services/item.service';
import { PopUpComponent } from 'src/app/main/components/pop-up/pop-up.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnDestroy{
  @Input() item!: IItem;
  popupDialog!: MatDialogRef<PopUpComponent>;

  constructor(
    private readonly store: Store,
    private readonly dialog: MatDialog,
    private readonly itemService: ItemService,
  ) {}

  openPopup(item: any): void {
    this.popupDialog = this.dialog.open(PopUpComponent, {
      data: { item: item }
    });
  }

  ngOnDestroy(): void {
    this.popupDialog.close();
  }
}
