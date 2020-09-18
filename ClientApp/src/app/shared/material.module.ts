import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';

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
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule
  ],
})
export class MaterialModule {}
