import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

const material: any[] = [
  MatCardModule,
  MatGridListModule,
] 

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    material,
  ]
})
export class MainModule { }
