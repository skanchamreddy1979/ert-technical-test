import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from 'src/app/interface/beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  @Input() beers: Beer[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  details(id: number) {
    this.router.navigate(['beer-details', btoa(id.toString())]);
  }

}
