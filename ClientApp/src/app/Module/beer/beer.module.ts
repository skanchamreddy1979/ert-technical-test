import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerRoutingModule } from './beer-routing.module';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [BeerDetailsComponent, BeersListComponent],
  imports: [
    CommonModule,
    BeerRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  //  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class BeerModule { }
