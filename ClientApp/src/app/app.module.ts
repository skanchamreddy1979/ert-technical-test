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

@NgModule({
  declarations: [AppComponent, ListComponent, WelcomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: ListComponent, pathMatch: 'full' },
      { path: 'list', component: WelcomeComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
