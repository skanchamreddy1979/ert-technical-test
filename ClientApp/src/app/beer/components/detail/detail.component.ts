import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from 'src/app/beer/models/beer.model';
import { BeerService } from 'src/app/beer/services/beer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number;
  beer: Beer;

  constructor(private beerService: BeerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getBeerDetails();
  }

  getBeerDetails() {
    this.beerService.getBeerById(this.id).subscribe(response => {
      if (response !== null && response.length > 0) {
        this.beer = response[0];
      }
    });
  }

  goBack() {
    this.router.navigate(['list']);
  }
}
