import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map, debounceTime, tap } from 'rxjs/operators';

@Directive({
  selector: '[appDebouncedInput]'
})
export class DebouncedInputDirective {
  private subscription: Subscription;

  @Output() onInput = new EventEmitter();

  constructor(private element: ElementRef){}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = fromEvent<any>(this.element.nativeElement, 'input')
      .pipe(
        map(e => e.target.value),
        debounceTime(200),)
      .subscribe(value => this.onInput.emit(value));
  }
}
