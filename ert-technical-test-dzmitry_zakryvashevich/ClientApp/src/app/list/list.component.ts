import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent implements AfterViewInit {
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Beer[]>(baseUrl + 'api/beer').subscribe(result => {
      this.beers = result;
      this.dataSource = new MatTableDataSource<Beer>(this.beers);
      this.dataSource.paginator = this.paginator;
    }, error => console.error(error));
  }

  public beers: Beer[];

  displayedColumns: string[] = ['name', 'first_brewed', 'tagline', 'abv'];
  dataSource;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
  }
}

export interface Beer {
  id: number;
  first_brewed: string;
  abv: string;
  tagline: string;
  name: string;
}
