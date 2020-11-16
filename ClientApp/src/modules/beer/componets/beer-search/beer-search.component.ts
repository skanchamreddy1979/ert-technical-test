import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css']
})
export class BeerSearchComponent {

  @Output() SearchChanged = new EventEmitter<string>();

  constructor() {
  }

  public search(args: string): void {
    this.SearchChanged.emit(args);
  }
}
