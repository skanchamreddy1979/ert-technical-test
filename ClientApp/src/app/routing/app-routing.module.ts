import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrewdogBeerDetailComponent } from '../component/brewdog-beer-detail/brewdog-beer-detail.component';
import { BrewdogBeersComponent } from '../component/brewdog-beers/brewdog-beers.component';
import { NotfoundComponent } from '../component/notfound/notfound.component';

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
