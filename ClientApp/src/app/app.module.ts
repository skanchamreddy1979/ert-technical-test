import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerService } from '../app/beer/services/beer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BeerComponent } from './beer/beer.component';
import { BeerDataComponent } from '../app/beer/beer-data/beer-data.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './beer/header/header.component';
import { HomeComponent } from './beer/home/home.component';
import { BeerFavouriteComponent } from './beer/beer-favourite/beer-favourite.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    BeerDataComponent,
    HeaderComponent,
    HomeComponent,
    BeerFavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
