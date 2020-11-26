import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrewdogbeerlistComponent } from './Beer/brewdogbeer-list/brewdogbeerlist.component';
import { BeerDetailsComponent } from './Beer/brewdogbeer-details/beer-details.component';

const routes: Routes = [

  { path: '', component: BrewdogbeerlistComponent, pathMatch: 'full' },
  { path: 'beers', component: BrewdogbeerlistComponent, pathMatch: 'full' },
  { path: 'beer-details/:id', component: BeerDetailsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BrewdogbeerlistComponent, BeerDetailsComponent];
