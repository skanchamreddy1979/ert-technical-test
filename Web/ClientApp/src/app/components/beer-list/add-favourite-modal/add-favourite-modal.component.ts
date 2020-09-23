import {
  Component,
  Inject,
  OnDestroy,
  OnInit } from '@angular/core';

import {
  MatDialogRef,
  MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { BeerService } from 'src/app/core/services/beer.service';
import { DialogData } from './dialog-data.model';

@Component({
  selector: 'app-add-favourite-modal',
  templateUrl: './add-favourite-modal.component.html',
  styleUrls: ['./add-favourite-modal.component.css']
})
export class AddFavouriteModalComponent implements OnInit, OnDestroy {

  private onAddSubscription: Subscription;
  email: string;
  inProgress: boolean;
  hasError: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private dialogRef: MatDialogRef<AddFavouriteModalComponent>,
    private beerService: BeerService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.onAddSubscription) {
      this.onAddSubscription.unsubscribe();
    }
  }

  onInputFocusOut(email: string) {
    this.email = email;
  }

  onAddClick() {
    this.inProgress = true;
    this.hasError = false;
    this.onAddSubscription = this.beerService.addFavourite(this.data.selected, this.email)
      .pipe(
        catchError(error =>  {
          this.hasError = true;
          throw error;
        }),
        finalize(() => { 
          this.inProgress = false;
          
          if (!this.hasError) {
            this.dialogRef.close();
          }
        }))
      .subscribe(() => {});
  }

}
