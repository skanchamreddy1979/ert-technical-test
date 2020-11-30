import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import {  BeersService, DetailComponent, BrewdogListComponent } from './beers';

@NgModule({
  declarations: [AppComponent, BrewdogListComponent, DetailComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: BrewdogListComponent, pathMatch: 'full' },
      { path: 'detail', component: DetailComponent },
      { path: 'list', component: BrewdogListComponent }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [BeersService],
  bootstrap: [AppComponent],
  entryComponents: [DetailComponent]
})
export class AppModule { }
