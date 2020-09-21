import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailComponent } from '../beer-detail/beer-detail.component';
import { BeerListComponent } from '../beer-list/beer-list.component';
import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'list', component: BeerListComponent },
  { path: 'detail/:id', component: BeerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }

