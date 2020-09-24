import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [HeaderModule],
})
export class LayoutModule {}
