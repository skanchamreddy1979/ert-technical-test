import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer.model';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  beers: Beer[] = [];

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.loadBeers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.loadBeers(filterValue);
  }

  private loadBeers(beerNameFilter?: string) {
    this.beerService.getBeers(beerNameFilter)
      .subscribe(beers => this.beers = beers);
  }
}
