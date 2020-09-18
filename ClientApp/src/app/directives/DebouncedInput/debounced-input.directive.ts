import { Directive, ElementRef, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map, debounceTime, tap } from 'rxjs/operators';

@Directive({
  selector: '[appDebouncedInput]'
})
export class DebouncedInputDirective implements OnInit, OnDestroy {
  private subscription: Subscription;

  @Output() textInput = new EventEmitter();

  constructor(private element: ElementRef) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = fromEvent<any>(this.element.nativeElement, 'input')
      .pipe(
        map(e => e.target.value),
        debounceTime(300), )
      .subscribe(value => this.textInput.emit(value));
  }
}
