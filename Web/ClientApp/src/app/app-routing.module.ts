import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerFavouriteComponent } from './components/beer-favourite/beer-favourite.component';

import { BeerListComponent } from './components/beer-list/beer-list.component';

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
