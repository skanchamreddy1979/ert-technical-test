import { Component, OnInit, Output } from '@angular/core';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {
  beers: [];
  page: number;
  pageSize: number;
  searchString: string;
  totalBeers: number;
  activeBeerId: number;

  constructor(private beersService: BeersService) {

  }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.beers = [];
    this.searchString = '';
    this.totalBeers = 0;
    this.activeBeerId = 1;
    this.getBeeers();
  }

  getBeeers = (): void => {
    this.beersService.getBeersByPage(this.page, this.pageSize).then((res: []) => {
      this.beers = res;
      // ideally the api should return the total available beers on the server
      // this is the total beers being returned by api at this moment, so just hard coding the total count
      this.totalBeers = 325;
    }).catch((err) => {
       console.log(err);
    });
  }

  searchBeers = (): void => {
    // replace the space in the search string with _ , it's needed as per the specs of pluck api
    this.searchString = this.searchString.trim().replace(' ', '_');
    if (this.searchString.length > 0) {
        this.beersService.searchBeers(this.searchString).then((res: []) => {
            this.beers = res;
            this.totalBeers = this.beers.length;
            this.page = 1;
        });
    } else {
      this.getBeeers();
    }
  }

  refreshBeers = (): void => {
     // during the search(if searchstring exists) - it's client side paging don't get the beers from server
     // if there is no search string - it's server side paging - get the beers by page
    if (!this.searchString.length) {
      this.getBeeers();
    }
  }

  onView = (beerId: number): void => {
    this.activeBeerId = beerId;
  }
}

