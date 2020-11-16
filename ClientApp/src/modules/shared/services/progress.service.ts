import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  public isGlobalProgress = false;

  constructor() { }

  public startGlobalProgress() {
    this.isGlobalProgress = true;
  }

  public stopGlobalProgress() {
    this.isGlobalProgress = false;
  }
}
