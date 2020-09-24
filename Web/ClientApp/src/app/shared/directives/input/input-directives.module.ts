import { NgModule } from '@angular/core';
import { EmailValidationDirective } from './email-validation.directive';

@NgModule({
    declarations: [EmailValidationDirective],
    exports: [EmailValidationDirective]
   })
export class InputDirectivesModule { }
