import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchInput: string = '';

  @Output() onSearchChange = new EventEmitter<string>();

  searchInputChanged(searchInput: string): void {
    this.onSearchChange.emit(searchInput);
  }

}
