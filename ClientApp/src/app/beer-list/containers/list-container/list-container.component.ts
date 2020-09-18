import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BeerItem } from 'src/app/interfaces/beer-item.model';
import BeerService from 'src/app/services/beer/beer.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListContainerComponent implements OnInit, OnDestroy, AfterViewInit {
  items: BeerItem[];
  destroy$ = new Subject<void>();

  constructor(private beerService: BeerService, private changeDetectorRef: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    this.beerService.loadBeers();
    this.beerService.selectBeers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((beers) => {
        this.items = beers;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
