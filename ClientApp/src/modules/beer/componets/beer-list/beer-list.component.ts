import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

import {BeerService} from "../../services/beer.service";
import {Beer} from "../../models/beer.model";
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'tagLine', 'firstBrewed', 'abv'];

  dataSource = new MatTableDataSource<Beer>();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  userQuestionUpdate = new Subject<string>();

  constructor(private _beerService: BeerService) {
    this.userQuestionUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        this._beerService.getBeers(value)
          .subscribe(resp => this.dataSource.data = resp);
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.userQuestionUpdate.next();
  }
}
