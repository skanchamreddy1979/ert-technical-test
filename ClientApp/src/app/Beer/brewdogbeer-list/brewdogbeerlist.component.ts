import { Component, OnInit } from '@angular/core';
import { BrewdogserService } from '../brewdogser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brewdogbeerlist',
  templateUrl: './brewdogbeerlist.component.html',
  styleUrls: ['./brewdogbeerlist.component.css']
})
export class BrewdogbeerlistComponent implements OnInit {
  public beers: any = [];
  public name: any;
  public p = 1;
  constructor(private brewdogService: BrewdogserService, private router: Router) { }

  // Method to get the beer list
  // This method calls the brewdogService and subscribe the data into component
  ngOnInit(): any {
    this.brewdogService.getBeerList()
      .subscribe(data => this.beers = data);
  }

  // Method to trigger search beer by name
  // Perform search by beer name
  Search(): any {
    if (this.name === '') {
      this.ngOnInit();
    }
    else {
      this.beers = this.beers.filter((res: { name: string; }) => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  // Method to navigate to beer-details after clicking on beer name
  // Method uses route to navigate to beer-details page/component
  onSelect(beer: any): any {
    this.router.navigate(['beers', this.beers.id]);
  }
}
