import { Component, DoCheck, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-shared-list',
  templateUrl: './shared-list.component.html',
  styleUrls: ['./shared-list.component.css']
})
export class SharedListComponent implements DoCheck {

  @Input() beers: MatTableDataSource<Beer>;
  displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  beersData: MatTableDataSource<Beer>;
  @ViewChild(MatSort, { static: false}) sort: MatSort;

  constructor(private router: Router) { }

  ngDoCheck(): void {
    if (this.beers !== this.beersData) {
      this.beersData = this.beers;
      this.beersData.sort = this.sort;
    }
  }

  public showDetails = (id: number) => {
    this.router.navigate(['details', id.toString()]);
  }
}
