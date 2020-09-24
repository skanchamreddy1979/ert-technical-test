import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { BeerService } from 'src/app/shared/beer.service';
import { GetBeersQuery } from 'src/app/shared/models/beer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {

  beersDatasource: DataSource;
  constructor(
    private beerService: BeerService,
    private router: Router) { }

  ngOnInit(): void {
    this.createDatasource();
  }

  createDatasource = (): void => {
    const customStore = new CustomStore({
      key: 'id',
      load: (loadOptions) => {
        const requestParams: GetBeersQuery = {
          page: (loadOptions.skip / loadOptions.take) + 1,
          per_page: loadOptions.take,
        };

        if (loadOptions.filter && loadOptions.filter[2]) {
          requestParams.page = 1;
          requestParams.beer_name = loadOptions.filter[2];
        }

        return this.beerService.get(requestParams)
          .toPromise()
          .then(response => {

            const noOfRecords = requestParams.beer_name ? 10 : 55;
            return {
              data: response,
              totalCount: noOfRecords
            };
          });
      }
    });

    this.beersDatasource = new DataSource(customStore);

  }

  gotoDetails = (beerId: number): void => {
    this.router.navigate(['beers/details', beerId]);
  }

}
