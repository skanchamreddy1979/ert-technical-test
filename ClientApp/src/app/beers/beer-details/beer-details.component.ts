import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BeersListComponent } from '../beers-list/beers-list.component';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit, OnChanges {
  @Input() beerId: number   
  beer: any 
  constructor(private beerService: BeersService) {

  }

  ngOnInit() {
    this.beer = {}
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.beerId.currentValue != changes.beerId.previousValue) {
      this.getBeer()
    }
  }

  getBeer() {
    if(this.beerId) {
      this.beerService.getBeerById(this.beerId).then((res: any) => {        
        const br = res[0];  
        this.beer = {
            id: br.id,
            name: br.name,
            tagLine: br.tagline,
            abv: br.abv,
            imgUrl: br.image_url,
            description: br.description
          }
      }).catch((err) => {
          console.log(err)
      })
    }
  }
}