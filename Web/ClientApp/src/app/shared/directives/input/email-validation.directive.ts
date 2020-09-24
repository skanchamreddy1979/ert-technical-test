import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appValidateEmail]',
  exportAs: 'validateEmail'
})
export class EmailValidationDirective implements OnInit, OnChanges {

    private regex: RegExp;
    valid: boolean;
    @Input() pattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

    constructor(private el: ElementRef) { }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['pattern']) {
            this.UpdateRegex();
        }
    }

    ngOnInit() {
        if (!(this.el.nativeElement instanceof HTMLInputElement)) {
            throw Error('Unexpected element');
        }

        this.UpdateRegex();
    }


    @HostListener('focusout')
    onChange() {
        this.valid = this.regex.test(this.el.nativeElement.value);
    }

    private UpdateRegex() {
        this.regex = new RegExp(this.pattern);
    }
}
