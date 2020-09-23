import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerListComponent } from './beer-list.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BeerListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TableModule
  ],
  exports: [BeerListComponent],
})
export class BeerListModule {}
