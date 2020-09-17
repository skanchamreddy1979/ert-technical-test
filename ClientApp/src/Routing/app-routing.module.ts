import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrewdogBeerDetailComponent } from '../app/brewdog-beer-detail/brewdog-beer-detail.component';
import { BrewdogBeersComponent } from '../app/brewdog-beers/brewdog-beers.component';
import { NotfoundComponent } from '../app/notfound/notfound.component';

const routes: Routes = [

  { path: 'list', component: BrewdogBeersComponent },
  { path: '', component: BrewdogBeersComponent },
  { path: 'details/:id', component: BrewdogBeerDetailComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
