import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { AuthInterceptor } from './core/Interceptor/AuthInterceptor';
import { AppRoutingModule } from './app.routing.module';
import { DetailComponent, FavouritesComponent, ListComponent, SharedListComponent } from './beer/components';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [AppComponent, ListComponent, WelcomeComponent, DetailComponent, FavouritesComponent, HeaderComponent, SharedListComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
