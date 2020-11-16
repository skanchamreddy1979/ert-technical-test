import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { MaterialModule } from './shared/material.module';

import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [AppComponent, ListComponent, SearchComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      //{ path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: '', component: ListComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
