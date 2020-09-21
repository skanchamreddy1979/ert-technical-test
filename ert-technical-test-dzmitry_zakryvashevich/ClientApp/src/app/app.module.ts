import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MaterialModule } from './shared/material.module';

import { NavMenuComponent } from "./component/layout/nav-menu/nav-menu.component";
import { WelcomeComponent } from "./component/modules/welcome/welcome.component";
import { FavouritesComponent } from "./component/modules/favourites/favourites.component";
import { BeerListComponent as BeerListComponent } from "./component/modules/beer-list/beer-list.component";
import { BeerDetailComponent as BeerDetailComponent } from "./component/modules/beer-detail/beer-detail.component";

@NgModule({
  declarations: [AppComponent, NavMenuComponent, BeerListComponent, WelcomeComponent, FavouritesComponent, BeerDetailComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'list', component: BeerListComponent },
      { path: 'detail/:id', component: BeerDetailComponent },
      { path: 'favourites', component: FavouritesComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
