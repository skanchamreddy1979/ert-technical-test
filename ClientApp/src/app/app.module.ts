import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';


import { WelcomeComponent } from './welcome/welcome.component';
import { DetailComponent } from './components/beer/detail/detail.component';
import { SearchComponent } from './components/beer/search/search.component';
import { ListComponent } from './components/beer/list/list.component';

@NgModule({
  declarations: [AppComponent, ListComponent, WelcomeComponent, SearchComponent, DetailComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'detail/:id', component: DetailComponent }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
