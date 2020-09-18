import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagingComponent implements OnInit {
  @Input() currentPage = 1;
  @Input() maxPage = 1;

  @Output() pageUp = new EventEmitter();
  @Output() pageDown = new EventEmitter();

  onPageUp() {
    this.pageUp.emit();
  }

  onPageDown() {
    this.pageDown.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
