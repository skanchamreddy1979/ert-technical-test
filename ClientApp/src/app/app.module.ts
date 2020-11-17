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

@NgModule({
  declarations: [AppComponent, BrewDogBeersComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: BrewDogBeersComponent, pathMatch: 'full' }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [BeerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
