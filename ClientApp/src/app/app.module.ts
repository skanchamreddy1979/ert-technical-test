import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { ListComponent } from './list/list.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { BeerService } from './services/beer.service';

@NgModule({
  declarations: [AppComponent, ListComponent, WelcomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'list', component: ListComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [BeerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
