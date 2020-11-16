import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './components/app.component';
import {MaterialModule} from "../material/material.module";
import {BeerModule} from "../beer/beer.module";
import {BeerMainPageComponent} from "../beer/pages/beer-main-page/beer-main-page.component";
import {NavbarComponent} from './components/navbar/navbar.component';
import {SharedModule} from "../shared";
import {ProductsListPageComponent} from "../beer/pages/products-list-page/products-list-page.component";
import {DetailedPageComponent} from "../beer/pages/detailed-page/detailed-page.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BeerModule,
    SharedModule,
    RouterModule.forRoot([
      {path: '', component: BeerMainPageComponent, pathMatch: 'full'},
      {path: 'list', component: ProductsListPageComponent},
      {path: 'detailed/:id', component: DetailedPageComponent},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
