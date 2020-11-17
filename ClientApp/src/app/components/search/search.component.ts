import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent {
    searchString = '';
    @Input() searchParametrName = '';
    @Output() search = new EventEmitter<string>();

    StartSearch() {
        this.search.emit(this.searchString);
    }
}
