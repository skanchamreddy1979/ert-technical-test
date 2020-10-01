import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Beer } from '../beer.model';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit, OnChanges {
  @Input() beerId: number;
  beer: Beer;
  constructor(private beerService: BeersService) {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.beerId.currentValue !== changes.beerId.previousValue) {
      this.getBeer();
    }
  }

  getBeer() {
    if (this.beerId) {
      this.beerService.getBeerById(this.beerId).then((res) => {
        const br = res[0];
        this.beer = {
            id: br.id,
            name: br.name,
            tagLine: br.tagline,
            abv: br.abv,
            imgUrl: br.image_url,
            description: br.description
          };
      }).catch((err) => {
          console.log(err);
      });
    }
  }
}
