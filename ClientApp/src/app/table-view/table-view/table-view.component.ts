import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from 'src/app/Models/beer';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
@Input() beers: Beer[];
@Input() page: string;
  constructor(private route: Router) { }

  ngOnInit() {
  }


}
