import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../Routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrewdogBeersComponent } from './brewdog-beers/brewdog-beers.component';
import { HttpClientModule } from '@angular/common/http';
import { BrewdogBeersService } from '../Service/brewdog-beers.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrewdogBeerDetailComponent } from './brewdog-beer-detail/brewdog-beer-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrewdogBeersFavComponent } from './brewdog-beers-fav/brewdog-beers-fav.component';
@NgModule({
  declarations: [
    AppComponent,
    BrewdogBeersComponent,
    BrewdogBeerDetailComponent,
    NotfoundComponent,
    BrewdogBeersFavComponent
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
