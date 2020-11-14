import { Component } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { Beer } from '../beer.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
beers ;
  constructor(private beerService: BeerService){
    
  }


  async ngOnInit(){
 this.beerService.getAllBeers().subscribe({next(result)  {      
        this.beers = result;
      console.log('sss', result);
    }});
    
console.log(this.beers)

  }
//   getBeers(){
//     this.beerService.getAllBeers().map(value => { this.beers =value});
// console.log(this.beers);

//   }
}
