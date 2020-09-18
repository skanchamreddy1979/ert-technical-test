import { DirectivesModule } from './../directives/directives.module';
import FilterService from '../services/filter/filter.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerItemComponent } from './components/beer-item/beer-item.component';
import { SearchComponent } from './components/search/search.component';
import { ListContainerComponent } from './containers/list-container/list-container.component';
import { SearchContainerComponent } from './containers/search-container/search-container.component';
import BeerService from '../services/beer/beer.service';
import { PagingContainerComponent } from './containers/paging-container/paging-container.component';
import { PagingComponent } from './components/paging/paging.component';
import PagingService from '../services/paging/paging.service';



@NgModule({
  declarations: [
    BeerItemComponent,
    SearchComponent,
    ListContainerComponent,
    SearchContainerComponent,
    PagingContainerComponent,
    PagingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DirectivesModule,
  ],
  providers: [
    BeerService,
    FilterService,
    PagingService
  ],
  exports: [
    ListContainerComponent,
  ]
})
export class BeerListModule { }
