import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from 'src/app/beer.model';
import { BeersService } from '../services/beers-service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  beers: Beer;
  constructor(private _beersService: BeersService, private _router: Router) { }

  ngOnInit() {
    const id = Number(sessionStorage.getItem('beerId'));
    this.getBeerListByID(id);
  }
  getBeerListByID(id) {
    this._beersService.getBeerById(id).subscribe(res => {
      if (res && res.length > 0) {
        this.beers = <Beer>res[0];
      }
    });
  }

  onBackButtonClick(): void {
    this._router.navigate(['']);
  }
}

