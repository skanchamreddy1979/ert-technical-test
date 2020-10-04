import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})

export class BeersListComponent implements OnInit {
  @Input() beers: [];
  @Input() totalBeers: number;
  @Input() pageNumber: number;
  @Input() pageSize: number;
  @Output() pageChange = new EventEmitter<number>();
  @Output() view = new EventEmitter<number>();
  @Output() search = new EventEmitter<string>();
  searchString: string;

  constructor() {

  }

  ngOnInit() {

  }

  onPageChange = (): void => {
    this.pageChange.emit(this.pageNumber);
  }

  onView = (beerId: number): void => {
    this.view.emit(beerId);
  }

  onSearch = (): void => {
    // reset the page on search
    this.pageNumber = 1;
    this.search.emit(this.searchString);
  }
}

