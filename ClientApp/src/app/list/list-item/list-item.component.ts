import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/beer.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  beer: Beer;

  constructor() { }

  ngOnInit() {
  }

}
