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



@NgModule({
  declarations: [BeerItemComponent, SearchComponent, ListContainerComponent, SearchContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DirectivesModule,
  ],
  providers: [
    BeerService,
    FilterService,
  ],
  exports: [
    ListContainerComponent,
  ]
})
export class BeerListModule { }
