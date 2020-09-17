import FilterService from '../../../services/filter/filter.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchContainerComponent implements OnInit {

  onChange(event){
    console.log(event);
    this.filterService.setFilter(event);
  }
  
  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }

}
