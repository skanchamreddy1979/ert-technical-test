import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
  })

export class SearchComponent {
    @Output() searchChange = new EventEmitter<string>();

    inputChanged(input: string): void {
        this.searchChange.emit(input);
    }
}
