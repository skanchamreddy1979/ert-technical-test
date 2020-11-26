import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBeerList } from '../../beerlist';
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
  ngOnInit(): any {

    this.id = this.route.snapshot.params[this.beerid];
    this.getOne();
  }

  getOne(): any {
    this.brewdogService.getBeerById(this.id).subscribe(data => {
      this.data = data[0];
      console.log(this.data);
    });
  }
}
