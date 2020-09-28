import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IBeer } from '../../models/beer';
import { BeerService } from '../../services/beer.service';

@Component({
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit, OnDestroy {
  pageTitle = 'Beer Detail';
  errorMessage = '';
  beer: IBeer | undefined;
  notifier = new Subject();

  constructor(private route: ActivatedRoute, private router: Router, private beerService: BeerService) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getBeer(id);
    }
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }

  getBeer(id: number): void {
    this.beerService.getBeer(id).pipe(takeUntil(this.notifier)).subscribe({
      next: beer => this.beer = beer,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/beers']);
  }
}

