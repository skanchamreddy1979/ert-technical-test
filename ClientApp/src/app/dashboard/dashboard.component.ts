import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { startWith, map } from 'rxjs/operators';
import { Beer } from '../Models/beer';
import { BeerService } from '../Services/beer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DecimalPipe]

})
export class DashboardComponent implements OnInit {

  filter = new FormControl('');
  beers: Beer[] = [];
  beersToFilter: Beer[] = [];
  page = 1;
  pageSize = 10;
  collectionSize: number;

  constructor(pipe: DecimalPipe, private beerservice: BeerService, private route: Router) {
    this.filter.valueChanges.pipe(startWith(''), map(text => this.search(text, pipe))).subscribe(
      (result: Beer[]) => {
        this.beers = result;
      }
    );
  }
  ngOnInit() {
    this.beerservice.getBeer().subscribe((result: Beer[]) => {
      this.collectionSize = result.length;
    });
    this.refreshCountries();
  }

  refreshCountries() {
    return this.beerservice.getBeersWithPagination(this.page, this.pageSize).subscribe(
      (result: Beer[]) => {
        this.beers = this.beersToFilter = result;
      }
    );
  }
  search(text: string, pipe: PipeTransform): Beer[] {
    return this.beersToFilter.filter(beer => {
      return beer.name.toLowerCase().includes(text.toLowerCase());
    });
  }
}


