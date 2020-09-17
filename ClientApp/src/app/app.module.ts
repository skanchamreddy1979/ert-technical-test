import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrewdogBeersComponent } from './component/brewdog-beers/brewdog-beers.component';
import { HttpClientModule } from '@angular/common/http';
import { BrewdogBeersService } from './service/brewdog-beers.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrewdogBeerDetailComponent } from './component/brewdog-beer-detail/brewdog-beer-detail.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { BrewdogBeersFavComponent } from './component/brewdog-beers-fav/brewdog-beers-fav.component';
import { GridComponent } from './component/grid/grid.component';
@NgModule({
  declarations: [
    AppComponent,
    BrewdogBeersComponent,
    BrewdogBeerDetailComponent,
    NotfoundComponent,
    BrewdogBeersFavComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule

  ],
  providers: [BrewdogBeersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
