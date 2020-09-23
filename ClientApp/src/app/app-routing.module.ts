import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailComponent } from './beer/components/beer-detail/beer-detail.component';
import { BeerFavoritesComponent } from './beer/components/beer-favorites/beer-favorites.component';
import { BeerListComponent } from './beer/components/beer-list/beer-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ {path: '', component: HomeComponent},
  { path: 'list', component: BeerListComponent },
{ path: 'detail/:id', component: BeerDetailComponent },
{ path: 'favorites', component: BeerFavoritesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
