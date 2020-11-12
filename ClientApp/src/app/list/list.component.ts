import { Component } from '@angular/core';
import { Beer } from '../beer.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  private beers: Beer[] = [
    {
      id: '1',
      name: 'Light',
      tagLine: 'Regular light beer',
      abv: '5',
      imgUrl: 'https://p1.pxfuel.com/preview/598/370/340/beer-drink-alcohol-yellow-bar-pub.jpg',
      description: `When you don't know what to choose take this`,
      firstBrewed: '04/2007'
    },
    {
      id: '2',
      name: 'Dark',
      tagLine: 'Normal dark beer',
      abv: '4',
      imgUrl: 'https://pixy.org/src/13/132743.jpg',
      description: `It's just like a regular beer, but dark.`,
      firstBrewed: '01/2000'
    },
    {
      id: '3',
      name: 'Wheat',
      tagLine: 'Casual wheat beer',
      abv: '4.5',
      imgUrl: 'https://p1.pxfuel.com/preview/163/777/305/wheat-beer-glass-back-light-hand.jpg',
      description: `Pretend you like it`,
      firstBrewed: '10/2012'
    }
  ]
}
