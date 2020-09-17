import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteBeersComponent } from './favorite-beers/favorite-beers.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: BeerDetailsComponent },
  { path: 'favorite', component: FavoriteBeersComponent },
  { path: 'favorites', component: FavoriteBeersComponent },
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
