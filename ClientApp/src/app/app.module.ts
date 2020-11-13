import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerModule } from './Module/beer/beer.module';
import { BeerService } from './Module/beer/beer.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BeerModule,
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
