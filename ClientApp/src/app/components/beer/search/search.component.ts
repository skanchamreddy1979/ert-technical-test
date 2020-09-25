import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
  })

export class SearchComponent {
    @Output() onChange = new EventEmitter<string>();

    inputChanged(input: string): void {
        this.onChange.emit(input);
    }
}