import { Component, OnInit
 } from '@angular/core';
import { DataService } from './data.service';
import { Beer } from './beer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService]
})
export class AppComponent implements OnInit {
  tableMode: boolean = true;
  beer: Beer = new Beer();
  beers: Beer[];


  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.loadBeers();
  }

  loadBeers(){
    this.dataService.getAllBeers()
      .subscribe((data: Beer[]) => this.beers = data);
  }

  save() {
      if (this.beer.id == null) {
          this.dataService.createProduct(this.beer)
              .subscribe((data: Beer) => this.beers.push(data));
      } else {
          this.dataService.updateProduct(this.beer)
              .subscribe(data => this.loadBeers());
      }
      this.cancel();
  }
  editProduct(b: Beer) {
      this.beer = b;
  }
  cancel() {
      this.beer = new Beer();
      this.tableMode = true;
  }
  delete(b: Beer) {
      this.dataService.deleteProduct(b.id)
          .subscribe(data => this.loadBeers());
  }
  add() {
      this.cancel();
      this.tableMode = false;
  }}

