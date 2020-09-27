import { NgModule } from '@angular/core';
import { BeerListComponent } from '../beers/beer-list/beer-list.component';
import { BeerDetailComponent } from '../beers/beer-detail/beer-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BeerListComponent,
    BeerDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'beers', component: BeerListComponent},
      {
        path: 'beers/:id',
        component: BeerDetailComponent}
    ]),
    SharedModule,
  ]
})
export class BeerModule { }
