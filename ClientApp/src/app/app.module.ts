import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { DetailBeerComponent } from './detail-beer/detail-beer.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, BeerListComponent, DetailBeerComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'BeerList', component: BeerListComponent, pathMatch: 'full' },
      { path: 'detail/:id', component: DetailBeerComponent, pathMatch: 'full' },

    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
