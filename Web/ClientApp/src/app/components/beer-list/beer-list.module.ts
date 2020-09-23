import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BeerListComponent } from './beer-list.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { AddFavouriteModalComponent } from './add-favourite-modal/add-favourite-modal.component';
import { InputDirectivesModule } from 'src/app/shared/directives/input/input-directives.module';

@NgModule({
  declarations: [
    BeerListComponent,
    AddFavouriteModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TableModule,
    InputDirectivesModule
  ],
  entryComponents: [AddFavouriteModalComponent],
  exports: [BeerListComponent],
})
export class BeerListModule {}
