import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { Beer } from 'src/app/models/beer.model';
import { BeerService } from 'src/app/services/beer.service';
import { takeUntil, tap } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['select', 'name', 'tagline', 'first_brewed', 'abv'];
  selection = new SelectionModel<Beer>(true, []);
  beers: Beer[] = [];
  notifier = new Subject();

  // hard coded value since it is not clear how to return total row count using beers api
  totalBeersCount = 325;
  pageSize = 10;

  get selected_rows(): Beer[] {
    return this.selection.selected;
  }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  constructor(private beerService: BeerService) { }


  ngOnInit(): void {
    this.loadBeers(1, this.pageSize);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(takeUntil(this.notifier),
        tap(() => {
          this.loadBeers(this.paginator.pageIndex + 1, this.pageSize);
        }))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.loadBeers(1, this.pageSize, filterValue);
  }

  private loadBeers(pageIndex: number, pageSize: number, beerNameFilter?: string) {
    this.beerService.getBeers(pageIndex, pageSize, beerNameFilter)
      .pipe(takeUntil(this.notifier))
      .subscribe(beers => {
        this.beers = beers;
      });
  }
}
