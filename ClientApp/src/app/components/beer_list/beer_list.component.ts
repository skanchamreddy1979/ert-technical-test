import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Beer } from 'src/app/models/beer.model';
import { PunkApiService } from 'src/app/services/punkapi.service';
import { displayBeerSettings } from 'src/app/shared/app.constants';
import { tap } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer_list.component.html',
  styleUrls: ['./beer_list.component.css'],
})
export class BeerListComponent implements AfterViewInit, OnInit {
  constructor(private _pukApiService: PunkApiService) {}

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['favorite', 'name', 'tagline', 'first_brewed', 'abv'];

  selection = new SelectionModel<Beer>(true, []);

  beers: Beer[] = [];
  searchingBeerName: string;
  totalPages = displayBeerSettings.currentTotalPages;
  pageSize = displayBeerSettings.currentPageSize;

  get getLength(): number {
    return this.totalPages * this.pageSize;
  }

  get getSelectedBeers() : Beer[] {
    return this.selection.selected;
  }

  ngOnInit(): void {
    this.getBeers(1, this.pageSize);
    this.checkLength();
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(tap(() => { this.getBeers(this.paginator.pageIndex + 1, this.pageSize)}))
      .subscribe();
  }

  onChanged(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    console.log(value);

    if(value.length > 0) {
      this.searchingBeerName = value;
    }
    else {
      this.searchingBeerName = null;
    }

    this.getBeers(1, this.pageSize);
  }

  private getBeers(pageNumber: number, pageSize: number) {
    this._pukApiService.getBeers(pageNumber, pageSize, this.searchingBeerName)
      .subscribe(beers => {
        this.beers = beers;
      }
    );
  }

  private checkLength() {
    this._pukApiService.getBeers(this.totalPages, this.pageSize)
      .subscribe(beers => {
        if(beers.length == this.pageSize) {
          this.totalPages = this.totalPages + 1;
          this.checkLength();
        }
      }
    );
  }
}
