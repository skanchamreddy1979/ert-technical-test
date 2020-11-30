import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { BeersService, DetailComponent, BrewdogListComponent, WelcomeComponent } from './beers';
import { FavouritesComponent } from './beers/favourites/favourites.component';
import { HomeComponent } from './beers/home/home.component';

@NgModule({
  declarations: [AppComponent, BrewdogListComponent, DetailComponent, WelcomeComponent, FavouritesComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: '', component: BrewdogListComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'list', component: BrewdogListComponent },
      { path: 'favourites', component:  FavouritesComponent }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [BeersService],
  bootstrap: [AppComponent],
  entryComponents: [DetailComponent]
})
export class AppModule { }
