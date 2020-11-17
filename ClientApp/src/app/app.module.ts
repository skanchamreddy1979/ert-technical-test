import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { MaterialModule } from './shared/material.module';
import { BeerWelcomeComponent } from './beer-welcome/beer-welcome.component';

@NgModule({
  declarations: [AppComponent, BeerWelcomeComponent, BeerListComponent, BeerDetailsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: BeerWelcomeComponent, pathMatch: 'full' },
      { path: 'list', component: BeerListComponent },
      { path: 'beers/:id', component: BeerDetailsComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
