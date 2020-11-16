import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css']
})
export class BeerSearchComponent implements OnInit {

  constructor() {
  }

  @Output() SearchChanged = new EventEmitter<string>();

  ngOnInit() {
  }

  public search(args: string): void {
    this.SearchChanged.emit(args);
  }

}
