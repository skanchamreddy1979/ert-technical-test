import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../Models/beer';
import { BeerService } from '../Services/beer.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  beer: Beer = {
    id: 0,
    name: null,
    tagline: null,
    abv: null,
    first_brew: null,
    description: null,
    image_url: null
  };

  id: string;
  constructor(private route: ActivatedRoute, private beerservice: BeerService) {
   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'));
    this.beerservice.getBeerById(this.id).subscribe(
      (result: Beer) => {
        this.beer = result[0];
      }
    );
  }

}
