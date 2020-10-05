import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { ListComponent } from './list/list.component';

import { WelcomeComponent } from './welcome/welcome.component';

import { FavouritesComponent } from './favourites/favourites.component';
import { DetailComponent } from './Detail/detail.component';
import { AllBeerListComponent } from "./allBeerList/allBeerList.component";

@NgModule({
  declarations: [AppComponent, ListComponent, WelcomeComponent, FavouritesComponent, DetailComponent, AllBeerListComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'list', component: AllBeerListComponent },
      { path: 'favorites', component: FavouritesComponent },
      { path: 'details/:id', component: DetailComponent }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
