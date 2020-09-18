import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FefavoriteRoutingModule } from './fefavorite-routing.module';
import { AddFevoriteComponent } from './add-fevorite/add-fevorite.component';


@NgModule({
  declarations: [AddFevoriteComponent],
  imports: [
    CommonModule,
    FefavoriteRoutingModule
  ]
})
export class FefavoriteModule { }
