import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './bear/list/list.component';
import { DetailComponent } from './bear/detail/detail.component';
import { FavouritesComponent } from './bear/favourites/favourites.component';
import { httpInterceptorProviders } from './core/interceptor';

import { HeaderComponent } from './sharedcomponents/header/header.component';
import { LoaderComponent } from './sharedcomponents/loader/loader.component';
import { FooterComponent } from './sharedcomponents/footer/footer.component';
import { BearListComponent } from './sharedcomponents/bear-list/bear-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    FavouritesComponent,
    WelcomeComponent,
    HeaderComponent,
    LoaderComponent,
    FooterComponent,
    BearListComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
