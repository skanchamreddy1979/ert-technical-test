import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BeerService } from 'src/app/services/beer.service';
import { ListAllbeersComponent } from './beers/list-allbeers/list-allbeers.component';
import { BeerdetailComponent } from './beers/beerdetail/beerdetail.component';
import { BeerFavouriteComponent } from './beers/beer-favourite/beer-favourite/beer-favourite.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './beers/list-allbeers/Pipe/Filteredpipe';

@NgModule({
  declarations: [
    AppComponent,
    ListAllbeersComponent,
    BeerdetailComponent,
    BeerFavouriteComponent,
    HomeComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [BeerService],
  exports:[FilterPipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
