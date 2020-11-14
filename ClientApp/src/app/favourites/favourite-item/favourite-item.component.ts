import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/beer.model';

@Component({
  selector: 'app-favourite-item',
  templateUrl: './favourite-item.component.html',
  styleUrls: ['./favourite-item.component.css']
})
export class FavouriteItemComponent implements OnInit {

  @Input()
  beer: Beer;

  constructor() { }

  ngOnInit() {
  }

}
