import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeersListComponent } from './beers/beers-list/beers-list.component';

const routes: Routes = [
  {
    path: '', component: BeersListComponent
  },
  {
    path: 'beers',
    loadChildren: () => import('./beers/beers.module').then(m => m.BeersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
