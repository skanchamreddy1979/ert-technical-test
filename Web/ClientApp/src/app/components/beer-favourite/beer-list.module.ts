import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/material.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { BeerFavouriteComponent } from './beer-favourite.component';

@NgModule({
  declarations: [BeerFavouriteComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TableModule
  ],
  exports: [BeerFavouriteComponent],
})
export class BeerFavouriteModule {}
