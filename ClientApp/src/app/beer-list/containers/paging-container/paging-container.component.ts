import { Paging } from './../../../store/paging/paging.interface';
import { concatAll, delayWhen, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import BeerService from 'src/app/services/beer/beer.service';
import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import PagingService from 'src/app/services/paging/paging.service';

@Component({
  selector: 'app-paging-container',
  templateUrl: './paging-container.component.html',
  styleUrls: ['./paging-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagingContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  page: number;
  limit: number;
  beersCount: number;
  pagesCount: number;

  destroy$ = new Subject<void>();

  onPageUp() {
    this.pagingService.setPage(this.page + 1);
  }

  onPageDown() {
    this.pagingService.setPage(this.page - 1);
  }

  constructor(private pagingService: PagingService, private beerService: BeerService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngAfterViewInit(): void {
    const paging = this.pagingService.selectPaging()
      .pipe(takeUntil(this.destroy$));
    paging.subscribe(value => {
      this.page = value.page;
      this.limit = value.limit;
      this.changeDetectorRef.detectChanges();
    });

    this.beerService.selectBeersCount()
      .pipe(
        takeUntil(this.destroy$),
        delayWhen(() => paging))
      .subscribe(value => {
        this.pagesCount = Math.ceil(value / this.limit);
        this.changeDetectorRef.detectChanges();
      });

  }

  ngOnInit() {
  }

}
