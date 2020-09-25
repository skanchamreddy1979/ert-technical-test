import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAllbeersComponent } from './beers/list-allbeers/list-allbeers.component';
import { BeerdetailComponent } from './beers/beerdetail/beerdetail.component';
import { BeerFavouriteComponent } from './beers/beer-favourite/beer-favourite/beer-favourite.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'beers', component: ListAllbeersComponent },
  { path: 'beers/:id', component: BeerdetailComponent },
  { path: 'beerFavourite', component: BeerFavouriteComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/beers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
