import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { ListComponent } from './list/list.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ListControlComponent } from './list/list-control/list-control.component';
import { BeerDetailsComponent } from './list/beer-details/beer-details.component';
import { BeerDetailsResolverService } from './list/beer-details/beer-details-resolver.service';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { UserGuard } from './shared/user/user.guard';

@NgModule({
  declarations: [
    AppComponent, 
    ListComponent, 
    WelcomeComponent,
    FavouritesComponent,
    HeaderComponent,
    ListItemComponent,
    ListControlComponent,
    BeerDetailsComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/list', pathMatch: 'full' },
      { path: 'list', component: ListComponent, children: [
        { path: ':id', component: BeerDetailsComponent, resolve: { beer: BeerDetailsResolverService }}
      ]},
      { path: 'favourites', component: FavouritesComponent, canActivate: [UserGuard]}
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
