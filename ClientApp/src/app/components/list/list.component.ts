import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Beer } from 'src/app/models/beer.model';
import { BrewDogBeerService } from 'src/app/services/brewDogBeers.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [BrewDogBeerService],
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string[] = ['name', 'tagline', 'firstbrewed', 'abv'];
  beers: Beer[];
  beersTotalLength = 999; // couldn't find a way to get the total count of beer
  pageSize = 10;
  startPageIndex = 1;
  notifier = new Subject();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private beerService: BrewDogBeerService) { }

  ngOnInit() {
    this.loadBeers(this.pageSize, this.startPageIndex);

  }

  ngAfterViewInit() {
    this.paginator
      .page.pipe(takeUntil(this.notifier))
      .subscribe(
        () => this.loadBeers(this.paginator.pageSize, this.paginator.pageIndex + 1)
      )
  }

  ngOnDestroy() {

  }

  private loadBeers(pageSize: number, pageNumber: number, searchByNameString?: string) {
    this.beerService
      .getBeers(pageSize, pageNumber, searchByNameString)
      .pipe(takeUntil(this.notifier))
      .subscribe(
        (data: Beer[]) => this.beers = data
      )
  }

  onSearch(searchString) {
    this.loadBeers(this.paginator.pageSize, 1, searchString);
  }
}
