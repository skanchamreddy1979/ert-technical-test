import { Component } from '@angular/core';
import { Beer } from '../../interfaces/beer.model';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent {
  constructor(public dialogRef: MatDialogRef<BeerDetailsComponent>) { }
  public beerData: Beer;
}

