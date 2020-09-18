import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BeerItem } from 'src/app/interfaces/beer-item.model';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerItemComponent implements OnInit {
  @Input() item: BeerItem;
  constructor() { }

  ngOnInit() {
  }
}
