import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersListComponent } from './beers-list/beers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers/beers.component';

@NgModule({
  declarations: [BeersListComponent, BeerDetailsComponent , BeersComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbModalModule
  ],
  exports: [
    BeersComponent
  ],
  entryComponents: [
    BeerDetailsComponent
  ]
})
export class BeersModule {

}
