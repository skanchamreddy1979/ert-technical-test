import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})

export class BeerDetailComponent {

  @Input()
  public selectedBeer: any;
  
  constructor() {
  }  
}
