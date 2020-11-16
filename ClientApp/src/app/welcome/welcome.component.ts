import { Component, ViewChild, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { Beer } from '../beer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';


const beers = [];

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  
  styleUrls: [
    './welcome.component.scss'],
    animations: [
      trigger('detailExpand', [
        state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
        state('expanded', style({ height: '*', visibility: 'visible' })),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      ]),
    ],
})

export class WelcomeComponent implements OnInit {
  // beers = []; 
  displayedColumns = ['name', 'tagLine',  'firstBrewed', 'abv'];
  dataSource: MatTableDataSource<Beer>;
  isExpansionDetailRow ;
  expandedElement: Beer | null;
  isTableExpanded = false;
  
  constructor(private beerService: BeerService) {
    
  }
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  async ngOnInit() {
    (await this.beerService.getAllBeers().toPromise()).forEach(
      (result: any) => {
        beers.push(result);       
      }
    );
    this.dataSource = new MatTableDataSource(beers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;  
    // this.isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  console.log(this.dataSource)
  }

  public doFilter = (value: string) => {
    this.dataSource.filterPredicate = function (
      data,
      filter: string
    ): boolean {
      return data.name.toLowerCase().includes(filter);
    };
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataSource.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    })
  }
 
}

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    const rows = [];
    beers.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows);
    return of(rows);
  }

  disconnect() { }
}
