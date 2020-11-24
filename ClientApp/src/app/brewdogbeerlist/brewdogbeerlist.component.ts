import { Component, OnInit } from '@angular/core';
//import { IBeerList } from '../beerlist';
import { BrewdogserService } from '../brewdogser.service';

@Component({
  selector: 'app-brewdogbeerlist',
  templateUrl: './brewdogbeerlist.component.html',
  styleUrls: ['./brewdogbeerlist.component.css']
})
export class BrewdogbeerlistComponent implements OnInit {
  public beers:any =[];
  public name:any;
  public p:number=1;
  constructor(private _brewdogservice : BrewdogserService) { }

  ngOnInit() {
    this._brewdogservice.getBeerList()
        .subscribe(data=> this.beers = data);
  }
  Search()
  {
    if(this.name ==""){
      this.ngOnInit();
    }
    else{
      this.beers = this.beers.filter((res: { name: string; })=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
}
