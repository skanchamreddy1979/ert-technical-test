import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from "../Services/beer.service";
import { IBeer } from "../beer.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
  ) { }

  beer: IBeer;
  ngOnInit(): void {
    this.getBeer();
  }

  getBeer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.beerService.getBeer(id)
      .subscribe(beer => { this.beer = beer;});
    
  }
  setFavorite(): void {
    this.beerService.setFavorite(this.beer).subscribe(b=>this.beer.isFavorite=true);
  }
}
