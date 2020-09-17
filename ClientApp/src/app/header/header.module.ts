import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router } from '@angular/router';



@NgModule({
  declarations: [HeaderContainerComponent, NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HeaderContainerComponent,
  ],
  providers: [
    //Router,
  ]
})
export class HeaderModule { }
