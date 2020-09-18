import { Component } from '@angular/core';

@Component({
  selector: 'app-beer-nav-menu',
  templateUrl: './beer-nav-menu.component.html',
  styleUrls: ['./beer-nav-menu.component.css']
})
export class BeerNavMenuComponent {

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
