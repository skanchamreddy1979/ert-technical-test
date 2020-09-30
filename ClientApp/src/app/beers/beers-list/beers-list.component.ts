import { Component, OnInit, Output } from '@angular/core';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {
  beers: any
  page: number
  pageSize: number
  searchString: string
  totalBeers: number
  activeBeerId: number
  
  constructor(private beersService: BeersService) { 

  }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.beers = [];
    this.searchString = "";
    //this is the total beers being returned by api at this moment - ideally api should return this
    this.totalBeers = 325; 
    this.getBeeers();
  }

  getBeeers() {
    this.beersService.getBeers(this.page, this.pageSize, this.searchString).then((res: any[]) => {
      this.beers = res;
    }).catch((err) => {
       console.log(err)
    });
  }

  searchBeers() {
    //replace the space in the search string with _ , it's needed as per the specs of pluck api
    this.searchString = this.searchString.trim().replace(" ", "_");
    //reset the page on search
    this.page = 1
    this.getBeeers();
  }

  refreshBeers() {
    this.getBeeers()
  }

  onView(beerId: number) {
    this.activeBeerId = beerId;
  }
}

