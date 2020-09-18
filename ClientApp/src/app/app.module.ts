import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerModule } from './Modules/beer/beer.module';
import { BeerService } from './Modules/beer/beer.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from './Directives/sortable.directive';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BeerModule,
    NgbModule
  ],
  providers: [BeerService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
