import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatDividerModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    MatTableModule,
    MatDividerModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule
  ],
})
export class MaterialModule {}
