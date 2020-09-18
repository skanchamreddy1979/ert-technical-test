import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() placeholder = 'Search...';
  @Input() label = 'Search';
  @Output() filterChanged = new EventEmitter<string>();

  constructor() { }

  onKeyUp(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterChanged.emit(filterValue);
  }
}
