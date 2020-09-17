import { Component, Input, OnInit } from '@angular/core';
import { BrewdogBeers } from 'src/app/interface/brewdog-beers';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }
  @Input() brewdogBeersList: BrewdogBeers[];
  @Input() page: number;
  @Input() pageSize: number;

  ngOnInit(): void {
  }

}
