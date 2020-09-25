import {Component, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Beer } from 'src/app/models/beer.model';
import { InternalBeerService } from 'src/app/services/internalBeer.service';

@Component({
  selector: 'app-save-favorites',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css'],
})
export class SavingComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  email: string;
  @Input() beers: Beer[];

  constructor(private _internalBeerService: InternalBeerService) { }

  saveFavourites() {
      if (this.beers.length > 0) {
        this._internalBeerService.saveFavourites(this.email, this.beers).subscribe();
      }
  }
}
