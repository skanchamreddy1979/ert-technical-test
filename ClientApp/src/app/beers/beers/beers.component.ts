import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BeerDetailsComponent } from '../beer-details/beer-details.component';
import { Beer } from '../beer.model';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  beers: Beer[];
  page: number;
  perPage: number;
  totalBeers: number;
  searchString: string;
  searchResults: Beer[];

  constructor(private beersService: BeersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.beers = [];
    this.page = 1;
    this.perPage = 10;
    this.totalBeers = 0;
    this.searchString = '';
    this.searchResults = [];
    this.getBeeers();
  }

  getBeeers = (): void => {
    this.beersService.getBeersByPage(this.page, this.perPage).then((res: Beer[]) => {
      this.beers = res;
      // ideally the api should return the total available beers on the server
      // this is the total beers being returned by api at this moment, so just hard coding the total count
      this.totalBeers = 325;
    }).catch((err) => {
       console.log(err);
    });
  }

  searchBeers = (searchString): void => {
    this.beersService.searchBeers(searchString).then((res: Beer[]) => {
      this.searchResults = res;
      this.totalBeers = res.length;
      this.beers = this.searchResults.slice(0, this.perPage);
    });
  }

  onPagechange = (pageNumber: number): void => {
    this.page = pageNumber;
    if (this.searchString.length) {
      this.beers = this.searchResults.slice((pageNumber - 1) * this.perPage, (pageNumber * this.perPage));
    } else {
      this.getBeeers();
    }
  }

  onView = (beerId: number): void => {
    this.beersService.getBeerById(beerId).then((res) => {
      const beer = res[0];
      const modalRef = this.modalService.open(BeerDetailsComponent);
      modalRef.componentInstance.beer = {
        id:  beer.id,
        name: beer.name,
        tagLine: beer.tagline,
        abv: beer.abv,
        imgUrl: beer.image_url,
        description: beer.description
      };
    }).catch( err => {
      console.log(err);
    });
  }

  onSearch = (searchString: string = ''): void => {
    // reset the page on search
    this.page = 1;
    // replace the space in the search string with _ before the search , it's needed as per the specs of pluck api
    this.searchString = searchString.trim().replace(' ', '_');
    if (this.searchString.length) {
      this.searchBeers(searchString);
    } else {
      this.getBeeers();
    }
  }
}
