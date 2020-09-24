import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/material.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { AddFavouritesModalComponent } from './add-favourites-modal.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [AddFavouritesModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TableModule,
    DirectivesModule
  ],
  exports: [AddFavouritesModalComponent],
})
export class AddFavouriteModule {}
