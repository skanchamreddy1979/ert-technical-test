import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { BeersListResolver, BeersService, DetailComponent, ListComponent } from './beers';

@NgModule({
  declarations: [AppComponent, ListComponent, WelcomeComponent, DetailComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      {
        path: 'list', component: ListComponent,
        resolve: {
          beerslist: BeersListResolver
        }
      },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [BeersService, BeersListResolver],
  bootstrap: [AppComponent],
  entryComponents: [DetailComponent]
})
export class AppModule { }
