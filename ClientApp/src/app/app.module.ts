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
import { HeaderComponent } from './header/header.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { SearchComponent } from './list/search/search.component';

@NgModule({
  declarations: [
    AppComponent, 
    ListComponent, 
    WelcomeComponent,
    FavouritesComponent,
    HeaderComponent,
    ListItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/list', pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'favourites', component: FavouritesComponent }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
