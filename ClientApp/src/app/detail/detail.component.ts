import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  beer: Beer;

  constructor(private route: ActivatedRoute,
    private beerService: BeerService) { }

  ngOnInit() {
    this.getBeer();
  }

  getBeer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.beerService.getBeer(id).subscribe(beer => {
      this.beer = beer[0]
    });
  }
}
