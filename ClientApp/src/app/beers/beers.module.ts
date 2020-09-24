import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';




@NgModule({
  declarations: [BeersListComponent, BeerDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: BeersListComponent },
      { path: 'beers', component: BeersListComponent },
      { path: 'details/:id', component: BeerDetailsComponent }
    ])
  ]
})
export class BeersModule { }
