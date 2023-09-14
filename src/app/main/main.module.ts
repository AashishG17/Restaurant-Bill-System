import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MainRoutingModule } from 'src/app/main/main-routing.module';
import { MainComponent } from 'src/app/main/main.component';
import { PopUpComponent } from 'src/app/main/components/pop-up/pop-up.component';
import { MenuDetailsComponent } from 'src/app/main/components/menu-details/menu-details.component';
import { OrdersComponent } from './components/orders/orders.component';

const material: any[] = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, 
  MatTableModule,
  MatTooltipModule,
  MatSnackBarModule,
] 

@NgModule({
  declarations: [MainComponent, PopUpComponent, MenuDetailsComponent, OrdersComponent],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    MatCardModule,
    material,
  ]
})
export class MainModule { }
