import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { BeerService } from 'src/app/beer/services/beer.service';
import { BrewDogBeersComponent } from './beer/components/brew-dog-beers/brew-dog-beers.component';
import { BeerDetailsComponent } from './beer/components/beer-details/beer-details.component';
import { BeersListResolver } from './beer/resolver/beers-list-resolver';

@NgModule({
  declarations: [AppComponent, BrewDogBeersComponent, BeerDetailsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BrewDogBeersComponent,
        resolve: {
          beerslist: BeersListResolver,
        },
      },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [BeerService, BeersListResolver],
  bootstrap: [AppComponent],
  entryComponents: [BeerDetailsComponent],
})
export class AppModule {}
