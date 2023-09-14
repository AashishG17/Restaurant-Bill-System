import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';

import { IItem, IMenu } from 'src/app/core/interfaces/item.interface';
import { addOrder } from 'src/app/core/store/item.actions';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store<{ menu: IMenu }>,
    private dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: IItem },
    private readonly snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    // console.log(this.data)
  }

  onSave(): void {
    this.store.dispatch(addOrder({ orders: this.data.item }));
    this.showSnackBar('Order Added!')
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
  showSnackBar(msg: string): void {
    this.snackBar.open(msg, 'Dismiss', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  ngOnDestroy(): void {
    this.dialogRef?.close();
  }
}
