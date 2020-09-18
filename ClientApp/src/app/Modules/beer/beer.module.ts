import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerRoutingModule } from './beer-routing.module';
import { BeersListComponent } from './beers-list/beers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [BeersListComponent, BeerDetailsComponent],
  imports: [
    CommonModule,
    BeerRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ]
})
export class BeerModule { }
