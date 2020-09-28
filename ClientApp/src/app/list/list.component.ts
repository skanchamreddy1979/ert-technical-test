import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../dataService';
import { AfterViewInit, Component, ViewChild } from '@angular/core';



export class Beer {
  Id: string;
  Name: number;
  Tagline: number;
  FirstBrewed: string;
  ABV: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements AfterViewInit {
  displayedColumns: string[] = ['Name', 'Tagline','FirstBrewed', 'ABV' ];
  beer: Beer[];
  page: number;
  take: number;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private dataService: DataService) {
    this.page = 1;
    this.take = 10;
  }

  ngOnInit() {
    this.dataService.getBeer('1', this.take.toString()).subscribe((data: Beer[]) => { this.beer = data; });
  }
  nextPage() {
    this.page++;
    this.dataService.getBeer(this.page.toString(), this.take.toString()).subscribe((data: Beer[]) => { this.beer = data; });
  }
  previusPage() {
    if (this.page > 1) {
      this.page--;
      this.dataService.getBeer(this.page.toString(), this.take.toString()).subscribe((data: Beer[]) => { this.beer = data; });
    }
  }
}
