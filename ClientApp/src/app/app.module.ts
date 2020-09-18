import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerDetailComponent } from './beer/components/beer-detail/beer-detail.component';
import { httpInterceptorProviders } from './core/interceptor';
import { HeaderComponent } from './sharedcomponents/header/header.component';
import { LoaderComponent } from './sharedcomponents/loader/loader.component';
import { FooterComponent } from './sharedcomponents/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeerListComponent, FavouritesComponent, BeerSharedListComponent } from './beer/components';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerDetailComponent,
    FavouritesComponent,
    WelcomeComponent,
    HeaderComponent,
    LoaderComponent,
    FooterComponent,
    BeerSharedListComponent],
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
