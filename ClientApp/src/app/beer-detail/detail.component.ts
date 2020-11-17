import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from '../beer-services/beer.service';
import { IBeer } from '../beer-models/beer/beer.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  public beer: IBeer;
  public id: number;

  constructor(private route: ActivatedRoute, private router: Router, private beerService: BeerService) {
    this.id = +route.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    this.beerService.getBeer(this.id)
      .subscribe(
        beers => {
          this.beer = beers[0];
        },
      );
  }

  onBack(): void {
    this.router.navigate(['/beers']);
  }
}
