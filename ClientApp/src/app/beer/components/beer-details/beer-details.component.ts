import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BeerDetailsComponent>) { }
  public beerDetailsData: any;
  ngOnInit() {
  }

}
