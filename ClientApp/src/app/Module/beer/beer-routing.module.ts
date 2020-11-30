import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersListComponent } from './beers-list/beers-list.component';

const routes: Routes = [
  {
    path: '',
    component: BeersListComponent,
    data: { action: 'isBeerListComp'}
  },
  {
    path: 'beerlist',
    component: BeersListComponent,
    data: { action: 'isBeerList'}
  },
  {
    path: 'details/:id',
    component: BeerDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }
