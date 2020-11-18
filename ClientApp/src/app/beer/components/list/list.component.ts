import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BeerService } from 'src/app/beer/services/beer.service';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  beers: MatTableDataSource<Beer>;
  allBeers: Beer[];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private beerService: BeerService) {
  }

  ngOnInit() {
    this.getBeersData();
  }

  public getBeersData = (): void => {
    this.beerService.getAllBeers().subscribe(response => {
      if (response !== null) {
        this.setBeers(response);
        this.allBeers = response;
      }
    });
  }

  public applyFilter = (filterValue: string): void => {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    const filteredBeers = this.allBeers.filter(beer => beer.name.toLowerCase().includes(filterValue));
    this.setBeers(filteredBeers);
  }

  private setBeers = (beersList: Beer[]): void => {
    this.beers = new MatTableDataSource<Beer>(beersList);
    this.beers.paginator = this.paginator;
  }
}
