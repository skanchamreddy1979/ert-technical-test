import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BeerListComponent } from './beer-list.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { AddFavouriteModule } from '../add-favourites-modal/add-favourites-modal.module';
import { AddFavouritesModalComponent } from '../add-favourites-modal/add-favourites-modal.component';

@NgModule({
  declarations: [
    BeerListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TableModule,
    AddFavouriteModule
  ],
  entryComponents: [AddFavouritesModalComponent],
  exports: [BeerListComponent],
})
export class BeerListModule {}
