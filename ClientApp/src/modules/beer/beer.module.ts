import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from "@angular/material/grid-list";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { RouterModule } from "@angular/router";

import { BeerListComponent } from './componets/beer-list/beer-list.component';
import { BeerMainPageComponent } from './pages/beer-main-page/beer-main-page.component';
import { MaterialModule } from "../material/material.module";
import { BeerPreviewComponent } from './componets/beer-preview/beer-preview.component';
import { BeerCardComponent } from './componets/beer-card/beer-card.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { BeerSearchComponent } from './componets/beer-search/beer-search.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { FavoritesListPageComponent } from './pages/favorites-list-page/favorites-list-page.component';



@NgModule({
  declarations: [
    BeerListComponent,
    BeerMainPageComponent,
    BeerPreviewComponent,
    BeerCardComponent,
    ProductsListPageComponent,
    BeerSearchComponent,
    DetailedPageComponent,
    FavoritesListPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    RouterModule
  ],
  exports: [
    BeerMainPageComponent,
    ProductsListPageComponent,
    DetailedPageComponent,
    FavoritesListPageComponent,
  ]
})
export class BeerModule {
}
