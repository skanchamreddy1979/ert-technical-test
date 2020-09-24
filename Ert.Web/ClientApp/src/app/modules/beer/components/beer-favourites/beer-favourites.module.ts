import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/material.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { BeerFavouriteComponent } from './beer-favourites.component';

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
