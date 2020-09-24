import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from './table/table.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [TableModule],
})
export class SharedComponentsModule {}
