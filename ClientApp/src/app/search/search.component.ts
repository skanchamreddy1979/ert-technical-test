import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent {
    searchString = '';
    @Input() searchParametrName = '';
    @Output() onSearch = new EventEmitter<string>();

    StartSearch() {
        this.onSearch.emit(this.searchString)
    }
}