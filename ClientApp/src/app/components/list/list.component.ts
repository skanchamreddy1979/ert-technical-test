import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Beer } from 'src/app/models/beer.model';
import { BrewDogBeerService } from 'src/app/services/brewDogBeers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [BrewDogBeerService],
})
export class ListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'tagline', 'firstbrewed', 'abv'];
  beers: Beer[];
  beersTotalLength = 999; // couldn't find a way to get the total count of beer
  pageSize = 10;
  startPageIndex = 1;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private beerService: BrewDogBeerService) { }

  ngOnInit() {
    this.loadBeers(this.pageSize, this.startPageIndex);
    
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => this.loadBeers(this.paginator.pageSize, this.paginator.pageIndex + 1))
  }

  private loadBeers(pageSize: number, pageNumber: number, searchByNameString?: string) {
    this.beerService.getBeers(pageSize, pageNumber, searchByNameString).subscribe((data: Beer[]) => this.beers = data )
  }

  onSearch(searchString) {
    this.loadBeers(this.paginator.pageSize, 1, searchString);
  }
}
