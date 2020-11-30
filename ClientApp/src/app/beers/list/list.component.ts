import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from 'src/app/beer.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { BeersService } from '../services/beers-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class BrewdogListComponent implements OnInit {
  beers: Beer[] = [];
  totalRecords: number;
  searchString: string;
  public dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  constructor(private _beersService: BeersService, private router: Router) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.getBeers();
  }


  navigateToDetails(id: string) {
    sessionStorage.setItem('beerId', id);
    this.router.navigateByUrl('/detail');
  }

  getFilterData(event: any) {
    if (event.target.value !== '' || event.target.value !== null) {
      this._beersService.searchBeerName(event.target.value).subscribe(res => {
        this.bindBeers(res);
      });
    }
  }

  private bindBeers(beers: Beer[]) {
    this.beers = <Beer[]>beers;
    this.dataSource = new MatTableDataSource(this.beers);
    this.totalRecords = this.beers.length;
    this.dataSource.paginator = this.paginator;
  }

  private getBeers() {
    this._beersService.getBeerList().subscribe(res => {
      this.bindBeers(res);
    });
  }
}

