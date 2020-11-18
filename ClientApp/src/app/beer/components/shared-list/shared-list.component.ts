import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-shared-list',
  templateUrl: './shared-list.component.html',
  styleUrls: ['./shared-list.component.css']
})
export class SharedListComponent implements OnInit, OnChanges {

  @Input() beers: Beer[];
  displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  beersData: MatTableDataSource<Beer>;
  @ViewChild(MatSort, { static: false}) sort: MatSort;
  @ViewChild(MatPaginator, { static: false}) paginator: MatPaginator;

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.beers.currentValue !== changes.beers.previousValue) {
      this.beersData = new MatTableDataSource<Beer>(this.beers);
      this.beersData.paginator = this.paginator;
      this.beersData.sort = this.sort;
    }
  }

  ngOnInit(): void {
  }

  public showDetails = (id: number) => {
    this.router.navigate(['details', id.toString()]);
  }
}
