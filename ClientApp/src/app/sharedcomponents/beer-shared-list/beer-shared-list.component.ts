import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from 'src/app/beer/interface/beer';

@Component({
  selector: 'app--shared-list',
  templateUrl: './beer-shared-list.component.html',
  styleUrls: ['./beer-shared-list.component.css']
})
export class BeerSharedListComponent implements OnInit {
  @Input() beers: Beer[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  details(id: number) {
    this.router.navigate(['beer-details', btoa(id.toString())]);
  }

}
