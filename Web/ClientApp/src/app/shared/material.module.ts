import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatDividerModule,
    MatInputModule,
    MatPaginatorModule
  ],
  exports: [
    MatTableModule,
    MatDividerModule,
    MatInputModule,
    MatPaginatorModule
  ],
})
export class MaterialModule {}
