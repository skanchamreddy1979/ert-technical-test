import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { Bear } from 'src/app/interface/bear';
import { BearService } from 'src/app/services/bear/bear.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  bears: Bear[] = [];
  bearsAll: Bear[] = [];
  bearsFiltered: Bear[] = [];
  private bearSubscription: Subscription;
  filter = new FormControl('');
  page = 1;
  pageSize = 10;
  collectionSize = 100;
  constructor(private bearService: BearService,
    public loaderService: LoaderService) { }
  ngOnInit() {

    this.getAllBears();
    this.filter.valueChanges.subscribe(text => {
      this.search(text);
    }
    );
  }
  getAllBears() {
    this.loaderService.setSpinner(true);
    this.bearSubscription = this.bearService.getAllBears().subscribe(result => {
      console.log(result);
      this.bearsFiltered = this.bearsAll = result;
      this.collectionSize = this.bearsAll.length;
      this.filterBears(this.bearsAll);
      this.loaderService.setSpinner(false);
    });

  }
  search(text: string) {
    this.page = 1;
    this.bearsFiltered = this.bearsAll.filter(bear => {
      const term = text.toLowerCase();
      return bear.name.toLowerCase().includes(term);
    });
    this.collectionSize = this.bearsFiltered.length;
    this.filterBears(this.bearsFiltered);
  }
  filterBears(bearsList: Bear[]) {
    this.bears = bearsList.map((bear, i) => ({ row: i + 1, ...bear })).slice(
      (this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  refreshBears() {
    this.filterBears(this.bearsFiltered);
  }
  ngOnDestroy() {
    if (this.bearSubscription) {
      this.bearSubscription.unsubscribe();
    }
  }
}


