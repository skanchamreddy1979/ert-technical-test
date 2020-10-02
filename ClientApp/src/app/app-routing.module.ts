import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailsComponent } from './beer/components/beer-details/beer-details.component';
import { BeerListComponent } from './beer/components/beer-list/beer-list.component';
import { BeerDetailsResolver } from './beer/resolvers/beer.details.resolver';
import { BeerListResolver } from './beer/resolvers/beer.list.resolver';

const routes: Routes = [
  { path: '', component: BeerListComponent },
  { path: 'beers', component: BeerListComponent, resolve: { beerListData: BeerListResolver } },
  { path: 'beerDetails/:id', component: BeerDetailsComponent, resolve: { beerData: BeerDetailsResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
