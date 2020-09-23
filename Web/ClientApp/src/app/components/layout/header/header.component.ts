import { Component, Input, OnInit } from '@angular/core';

import { MenuItem } from 'src/app/core/models/menu-item';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() menu: MenuItem[];

  constructor() { }

  ngOnInit(): void {
   
  }

}
