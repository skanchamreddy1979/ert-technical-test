import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Beer } from '../beer.model';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent {
  @Input() beer: Beer;

  constructor(public activeModal: NgbActiveModal) {

  }

  onModalClose() {
     this.activeModal.close();
  }
}
