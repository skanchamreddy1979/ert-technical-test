import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  public isGlobalProgress:boolean = false;

  constructor() { }

  public startGlobalProgress(){
    this.isGlobalProgress = true;
    console.log("State", this.isGlobalProgress)
  }

  public stopGlobalProgress(){
    this.isGlobalProgress = false;
    console.log("State", this.isGlobalProgress)
  }
}
