import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BeerModule } from './beers/beer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'beers', pathMatch: 'full'},
      {path: '**', redirectTo: 'beers', pathMatch: 'full'}
    ]),
    BeerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
