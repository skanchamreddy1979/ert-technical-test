import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  spinnerSubject = new BehaviorSubject<boolean>(false);
  constructor() { }
  setSpinner(status: boolean) {
    this.spinnerSubject.next(status);
  }
  getSpinner() {
    return this.spinnerSubject.asObservable();
  }
}
