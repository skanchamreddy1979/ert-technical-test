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
// Below method is used to initialize all the variables.
  ngOnInit() {
    const id = sessionStorage.getItem('beerId');
    this.getBeerListById(id);
  }
  // Below method calls service to fetch beer by id
  getBeerListById(id: string) : void{
    this._beersService.getBeerById(id).subscribe(res => {
      if (res && res.length > 0) {
        this.beers = <Beer>res[0];
      }
    });
  }
// Below method is called when back button is clicked.
  onBackButtonClick(): void {
    this._router.navigate(['']);
  }
}

