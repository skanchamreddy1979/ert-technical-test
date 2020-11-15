import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerListComponent } from './componets/beer-list/beer-list.component';
import { BeerMainPageComponent } from './pages/beer-main-page/beer-main-page.component';
import {MaterialModule} from "../material/material.module";
import {MatGridListModule} from "@angular/material/grid-list";
import { BeerPreviewComponent } from './componets/beer-preview/beer-preview.component';
import {HttpClientModule} from "@angular/common/http";
import { BeerCardComponent } from './componets/beer-card/beer-card.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    BeerListComponent,
    BeerMainPageComponent,
    BeerPreviewComponent,
    BeerCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
  ],
  exports: [
    BeerMainPageComponent
  ]
})
export class BeerModule { }
