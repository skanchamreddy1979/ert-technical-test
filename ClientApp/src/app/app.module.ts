import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { BeerListComponent } from './components/beer-list/beer-list.component';
import { BeerComponent } from './components/beer/beer.component';
import { BeerNavMenuComponent } from './layout/beer-nav-menu/beer-nav-menu.component';

@NgModule({
  declarations: [AppComponent, BeerListComponent, BeerComponent, BeerNavMenuComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: BeerListComponent, pathMatch: 'full' },
      { path: 'beers/:beerId', component: BeerComponent }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
