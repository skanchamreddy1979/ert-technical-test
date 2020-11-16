import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatInputModule,
  ],
  exports: [
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatInputModule,
  ]
})
export class MaterialModule {
}
