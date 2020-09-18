import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchInput = '';

  @Output() SearchChanged = new EventEmitter<string>();

  searchInputChanged(searchInput: string): void {
    this.SearchChanged.emit(searchInput);
  }

}
