import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './bear/detail/detail.component';
import { FavouritesComponent } from './bear/favourites/favourites.component';
import { ListComponent } from './bear/list/list.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'bearlist', component: ListComponent },
  { path: 'bear-favorate', component: FavouritesComponent },
  { path: 'bear-details/:id', component: DetailComponent },
  { path: 'home', component: WelcomeComponent },
  { path: '', redirectTo: '/bearlist', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
