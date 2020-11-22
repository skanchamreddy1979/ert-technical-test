import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  beers: Beer[];
  error: string;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.GetBeers();
  }

  GetBeers() {
    this.beerService.list().subscribe({
      next: beers => this.beers = beers,
      error: err => this.error = err
    });
  }
}