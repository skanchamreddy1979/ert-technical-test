import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderContainerComponent implements OnInit {
  onMainClick(e){
    this.router.navigate(['']);
  }
  onListClick(e){
    this.router.navigate(['list']);
  }
  onFavouritesClick(e){
    this.router.navigate(['']);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
