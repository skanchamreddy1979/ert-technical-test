import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailComponent } from './beer/beer-detail/beer-detail.component';
import { FavouritesComponent } from './beer/beer-favourites/favourites.component';
import { BeerListComponent } from './beer/beer-list/beer-list.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'beerlist', component: BeerListComponent },
  { path: 'beer-favorate', component: FavouritesComponent },
  { path: 'beer-details/:id', component: BeerDetailComponent },
  { path: 'home', component: WelcomeComponent },
  { path: '', redirectTo: '/beerlist', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
