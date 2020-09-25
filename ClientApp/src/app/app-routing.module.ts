import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerComponent } from './beer/beer.component';
import { BeerDataComponent } from '../app/beer/beer-data/beer-data.component';
import { HeaderComponent } from './beer/header/header.component';
import { HomeComponent } from './beer/home/home.component';
import { BeerFavouriteComponent } from '../app/beer/beer-favourite/beer-favourite.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'beer',
  },
  {
    path: 'beer',
    component: BeerComponent,
  },
  { path: 'beer/:id', component: BeerDataComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'beerFavourite', component: BeerFavouriteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
