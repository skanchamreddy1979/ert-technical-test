import {Component} from '@angular/core';
import {ProgressService} from "../../shared";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(public _progressService: ProgressService) {
  }
}
