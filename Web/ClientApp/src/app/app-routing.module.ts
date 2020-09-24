import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule } from '@angular/router';

import { BeerFavouriteComponent } from './modules/beer/components/beer-favourites/beer-favourites.component';
import { BeerListComponent } from './modules/beer/components/beer-list/beer-list.component';

const routes: Routes = [
  { path: '', component: BeerListComponent },
  { path: 'beer/favourite', component: BeerFavouriteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
