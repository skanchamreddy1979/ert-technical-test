import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  @Output() changeEv = new EventEmitter();

  queryChanged(event) {
    this.changeEv.emit(event.target.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
