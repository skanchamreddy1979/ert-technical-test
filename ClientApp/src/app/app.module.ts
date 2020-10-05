import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ListComponent } from './beers/list/list.component';
import { DetailComponent } from './beers/detail/detail.component';

@NgModule({
  declarations: [AppComponent, ListComponent, DetailComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'list', pathMatch: 'full' },
      { path: 'list', component: ListComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DetailComponent]
})
export class AppModule {}
