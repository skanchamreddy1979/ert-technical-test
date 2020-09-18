import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Beer } from '../beer.model';
import { BeerService } from '../services/beer.service';
import { BeerDetailComponent } from '../beer-detail/beer-detail.component';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class BeerListComponent implements AfterViewInit {
  public selectedBeer: Beer;
  private displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  private dataSource: MatTableDataSource<Beer>;

  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;
  @ViewChild(MatSort, { static: false })
  sort: MatSort;

  constructor(beerService: BeerService) {
     beerService.getAllBeers().subscribe((result) => {
     const beers = result as Beer[];
     this.dataSource = new MatTableDataSource(beers);
     this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
  }

  getRecord($event) {
    this.selectedBeer = this.dataSource.data.find(element => element.id === $event) as Beer;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

