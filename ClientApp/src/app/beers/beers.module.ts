import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersListComponent } from './beers-list/beers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BeerDetailsComponent } from './beer-details/beer-details.component';

@NgModule({
  declarations: [BeersListComponent, BeerDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule
  ],
  exports: [
    BeersListComponent
  ]
})
export class BeersModule {

}
