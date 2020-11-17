import { Component, ViewChild, OnInit } from '@angular/core';
import { BeerService } from 'src/app/beer/services/beer.service';
import { Beer } from 'src/app/beer/interfaces/beer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const beers = [];

@Component({
  selector: 'app-brew-dog-beers',
  templateUrl: './brew-dog-beers.component.html',
  styleUrls: ['./brew-dog-beers.component.css'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class BrewDogBeersComponent implements OnInit {
  displayedColumns = ['name', 'tagLine', 'firstBrewed', 'abv'];
  dataSource: MatTableDataSource<Beer>;
  expandedElement: Beer | null;
  isTableExpanded = false;

  constructor(private beerService: BeerService) {}
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
  }

  public doFilter = (value: string) => {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };
  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataSource.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    });
  }
}
