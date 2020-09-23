import { Component, OnInit } from '@angular/core';
import { MenuItem } from './core/models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit {
  
  menu: MenuItem[];

  ngOnInit(): void {
    this.menu = [
      { text: 'Beers', link: '' },
      { text: 'My Favourites', link: 'nolink' }
    ];
  }

}
