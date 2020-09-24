import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './modules/layout/layout-module';
import { BeerService } from './core/services/beer.service';
import { MaterialModule } from './shared/material.module';
import { BeerModule } from './modules/beer/beer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    BeerModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
