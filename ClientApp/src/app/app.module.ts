import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerListComponent } from './beer/components/beer-list/beer-list.component';
import { BeerDetailsComponent } from './beer/components/beer-details/beer-details.component';
import { MaterialTableModule } from './beer/shared/modules/mattable.module';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerDetailsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialTableModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
