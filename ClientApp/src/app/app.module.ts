import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { BeerListComponent } from './beer-list/beer-list.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerRoutingModule } from './beer-router/beer-router.module';

@NgModule({
  declarations: [AppComponent, BeerListComponent, WelcomeComponent, BeerDetailComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BeerRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
