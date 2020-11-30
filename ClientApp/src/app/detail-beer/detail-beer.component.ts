import { Component, OnInit, OnDestroy } from '@angular/core';
import { PunkAPIService } from '../shared/punk-api.service';
import { Subscription } from 'rxjs';
import { Beer } from '../beer.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail-beer',
  templateUrl: './detail-beer.component.html',
  styleUrls: ['./detail-beer.component.css']
})
export class DetailBeerComponent implements OnInit, OnDestroy {
  beer: Beer;
  private subscriptions = new Subscription();
  beerFormGroup: FormGroup = this.formBuilder.group({
    'BeerName': null,
    'description': null,
    'abv': null
  });

  constructor(private route: ActivatedRoute, private punkAPIService: PunkAPIService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.beerFormGroup.disable();
    this.getDetailBeer();
  }

  getDetailBeer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscriptions.add(this.punkAPIService.getBeerbyID(id).subscribe(beer => {
      this.beer = beer[0];
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
