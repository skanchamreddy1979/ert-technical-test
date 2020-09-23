import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Beer } from 'src/app/model/beer.model';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})

export class BeerListComponent implements AfterViewInit {
  constructor(private beerService: BeerService) {
  }

  public beers: Beer[];

  displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  dataSource;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this.beerService.getBeers()
      .subscribe(beers => {
        this.beers = beers;
        this.dataSource = new MatTableDataSource<Beer>(this.beers);
        this.dataSource.paginator = this.paginator;
      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
  }
}

