import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent, FavouritesComponent, ListComponent } from './beer/components';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'favourite', component: FavouritesComponent },
  { path: 'details/:id', component: DetailComponent },
  { path: 'home', component: WelcomeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
