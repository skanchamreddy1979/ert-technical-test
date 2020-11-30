import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// Below method is used to call a service and get all the favourites against an email id.
fetchFavouritesList(email: string): void {
  // Todo
}
// Below method is used to call a service that will add beer to favourites.
addToFavourites(id: string, email: string):  void {
// Todo
}
}
