import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BeerService } from 'src/app/beer/services/beer.service';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  beers: MatTableDataSource<Beer>;
  allBeers: Beer[];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort: MatSort;

  constructor(private beerService: BeerService, private router: Router) {
  }

  ngOnInit() {
    this.getBeersData();
  }

  ngAfterViewInit() {
    if (this.beers !== undefined) {
      this.beers.paginator = this.paginator;
      this.beers.sort = this.sort;
    }
  }

  getBeersData() {
    this.beerService.getAllBeers().subscribe(response => {
      if (response !== null) {
        this.setBeers(response);
        this.allBeers = response;
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    const filteredBeers = this.allBeers.filter(beer => beer.name.toLowerCase().includes(filterValue));
    this.setBeers(filteredBeers);
  }

  setBeers(beersList: Beer[]) {
    this.beers = new MatTableDataSource<Beer>(beersList);
    this.beers.paginator = this.paginator;
    this.beers.sort = this.sort;
  }

  showDetails(id: number) {
    this.router.navigate(['details', id.toString()]);
  }
}
