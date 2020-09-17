import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { MaterialModule } from './shared/material.module';

import { ListComponent } from './list/list.component';

import { DetailComponent } from './detail/detail.component';

import { FavouritesComponent } from './favourites/favourites.component';

import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, NavMenuComponent, ListComponent, WelcomeComponent, FavouritesComponent, DetailComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'favourites', component: FavouritesComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
