import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BeersService } from '../services/beers.service';

@Component({
  selector: 'app-selectedbeer',
  templateUrl: './selectedbeer.component.html',
  styleUrls: ['./selectedbeer.component.css'],
})
export class SelectedbeerComponent implements OnInit, OnDestroy {
  public id: number;
  selectedBeer: any;
  private subscription: Subscription;

  constructor(
    private beerService: BeersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setParameter();
  }

  public setParameter = (): void => {
    this.id = +this.route.snapshot.params['id'];
    this.getSelectedBeer(this.id);
  }

  public getSelectedBeer = (id): void => {
    this.subscription = this.beerService
      .getSelectedBeer(id)
      .subscribe((response) => {
        this.selectedBeer = response[0];
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
