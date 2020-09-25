import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { ListComponent } from './components/beer/list/list.component';
import { SearchComponent } from './components/beer/search/search.component';
import { DetailComponent } from './components/beer/detail/detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { SavingComponent } from './components/beer/saving/saving.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, ListComponent, DetailComponent, WelcomeComponent, SavingComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'beer/:id', component: DetailComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
