import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrewdogBeers } from '../../Interface/brewdog-beers';
import { BrewdogBeersService } from '../../Service/brewdog-beers.service';


@Component({
  selector: 'app-brewdog-beer-detail',
  templateUrl: './brewdog-beer-detail.component.html',
  styleUrls: ['./brewdog-beer-detail.component.css']
})
export class BrewdogBeerDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private brewdogservice: BrewdogBeersService) { }
  id: number;
  brewdogbeers: BrewdogBeers[];

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => this.id = +data.get('id'));

    this.brewdogservice.getBrewdogBeerDetail(this.id).subscribe(
      x => this.brewdogbeers = x
    );
  }

}
