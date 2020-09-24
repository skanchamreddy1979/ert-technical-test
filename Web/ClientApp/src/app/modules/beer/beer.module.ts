import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerFavouriteModule } from './components/beer-favourites/beer-favourites.module';
import { AddFavouriteModule } from './components/add-favourites-modal/add-favourites-modal.module';
import { BeerListModule } from './components/beer-list/beer-list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BeerListModule,
    BeerFavouriteModule,
    AddFavouriteModule
  ],
  exports: [
    AddFavouriteModule,
    BeerFavouriteModule,
    BeerListModule
  ],
})
export class BeerModule {}
