import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBeerList } from '../../Beer/beerlist';
import { BrewdogserService } from '../brewdogser.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  id: any;
  public data: any;
  constructor(private brewdogService: BrewdogserService, private route: ActivatedRoute) { }
  public beerid = 'id';

  // Method to get the beer details by id
  // This method uses route and passes beer id as parameter
  // This method calls getOne() method to call brewbeerService
  ngOnInit(): any {
    this.id = this.route.snapshot.params[this.beerid];
    this.getOne();
  }

  // Method to read data from service and subscribe it in beer-details component
  // This method calls brewdogService and subscribe the data
  getOne(): any {
    this.brewdogService.getBeerById(this.id).subscribe(data => {
      this.data = data[0];
      console.log(this.data);
    });
  }
}
