import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { FavoriteBeersComponent } from './favorite-beers/favorite-beers.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TableViewComponent } from './table-view/table-view/table-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BeerDetailsComponent,
    FavoriteBeersComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
