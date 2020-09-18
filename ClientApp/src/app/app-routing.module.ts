import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BeerListComponent, FavouritesComponent, BeerDetailComponent } from './beer/components';


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
