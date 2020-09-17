import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebouncedInputDirective } from './DebouncedInput/debounced-input.directive';



@NgModule({
  declarations: [DebouncedInputDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
