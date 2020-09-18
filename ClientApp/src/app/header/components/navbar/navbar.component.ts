import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @Output() mainClick = new EventEmitter();
  @Output() listClick = new EventEmitter();
  @Output() favouritesClick = new EventEmitter();

  onMainClick(e) {
    e.preventDefault();
    this.mainClick.emit(e);
  }
  onListClick(e) {
    e.preventDefault();
    this.listClick.emit(e);
  }
  onFavouritesClick(e) {
    e.preventDefault();
    this.favouritesClick.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
