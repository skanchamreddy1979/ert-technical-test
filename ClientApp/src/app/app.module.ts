import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { BeerListComponent } from './components/beer_list/beer_list.component';
import { BeerDetailComponent } from './components/beer_detail/beer_detail.component';
import { PunkApiService } from './services/punkapi.service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [AppComponent, BeerListComponent, BeerDetailComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: BeerListComponent, pathMatch: 'full' },
      { path: 'beers/:id', component: BeerDetailComponent },
      { path: '**', component: BeerListComponent },
    ]),
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [PunkApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
