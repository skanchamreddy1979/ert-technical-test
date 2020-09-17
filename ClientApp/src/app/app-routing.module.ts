import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailsComponent } from './beer/beer-details/beer-details.component';
import { BeerListComponent } from './beer/beer-list/beer-list.component';
import { BeerOpenResolver } from './beer/resolver/beer.resolver';

const routes: Routes = [
  { path: '', component: BeerListComponent },
  { path: 'beers', component: BeerListComponent },
  { path: 'beerDetails/:id', component: BeerDetailsComponent, resolve: { beerData: BeerOpenResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
