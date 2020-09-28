import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Beer } from '../beer.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DataService]
})
export class ListComponent implements OnInit {
  beer: Beer = new Beer();
  beers: Beer[];

  constructor(private dataService: DataService) {
  }
  ngOnInit() {
    this.loadBeers();
  }
  loadBeers() {
    this.dataService.getAllBeers()
      .subscribe((data: Beer[]) => this.beers =
       data);
  }
}
