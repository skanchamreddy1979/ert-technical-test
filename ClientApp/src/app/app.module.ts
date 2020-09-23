import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { BeerListComponent } from './beer/components/beer-list/beer-list.component';
import { NavComponent } from './nav/nav.component';
import { BeerDetailComponent } from './beer/components/beer-detail/beer-detail.component';
import { BeerFavoritesComponent } from './beer/components/beer-favorites/beer-favorites.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, BeerListComponent, NavComponent, BeerDetailComponent, BeerFavoritesComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
