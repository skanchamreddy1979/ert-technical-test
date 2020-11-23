import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize: number;
  beers: Beer[];
  error: string;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.GetBeers(this.page);
  }

  GetBeers(page: number) {
    return this.beerService.list().subscribe((response) => {
      console.log('page', page);
      this.beers = response.slice((page - 1) * this.pageSize, (page - 1) * this.pageSize + this.pageSize);
      this.collectionSize = response.length;
    });
  }
}

