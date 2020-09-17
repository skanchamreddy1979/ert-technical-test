import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './beer/detail/detail.component';
import { FavouritesComponent } from './beer/favourites/favourites.component';
import { ListComponent } from './beer/list/list.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'beerlist', component: ListComponent },
  { path: 'beer-favorate', component: FavouritesComponent },
  { path: 'beer-details/:id', component: DetailComponent },
  { path: 'home', component: WelcomeComponent },
  { path: '', redirectTo: '/beerlist', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
