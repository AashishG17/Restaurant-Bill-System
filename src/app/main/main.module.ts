import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { MainRoutingModule } from 'src/app/main/main-routing.module';
import { MainComponent } from 'src/app/main/main.component';
import { PopUpComponent } from 'src/app/main/components/pop-up/pop-up.component';
import { FormsModule } from '@angular/forms';

const material: any[] = [
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, 
  MatTableModule,
] 

@NgModule({
  declarations: [MainComponent, PopUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    MatCardModule,
    material,
  ]
})
export class MainModule { }
