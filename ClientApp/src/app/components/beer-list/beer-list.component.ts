import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { Beer } from 'src/app/models/beer.model';
import { BeerService } from 'src/app/services/beer.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  beers: Beer[] = [];

  // hard coded value since it is not clear how to return total row count using beers api
  totalBeersCount = 325;
  pageSize = 10;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.loadBeers(1, this.pageSize);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(tap(() => {
        this.loadBeers(this.paginator.pageIndex + 1, this.pageSize);
      }))
      .subscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.loadBeers(1, this.pageSize, filterValue);
  }

  private loadBeers(pageIndex: number, pageSize: number, beerNameFilter?: string) {
    this.beerService.getBeers(pageIndex, pageSize, beerNameFilter)
      .subscribe(beers => {
        this.beers = beers;
      });
  }
}
