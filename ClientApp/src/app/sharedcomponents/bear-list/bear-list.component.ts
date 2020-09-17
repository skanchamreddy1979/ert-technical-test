import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bear } from 'src/app/interface/bear';

@Component({
  selector: 'app-bear-list',
  templateUrl: './bear-list.component.html',
  styleUrls: ['./bear-list.component.css']
})
export class BearListComponent implements OnInit {
  @Input() bears: Bear[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  details(id: number) {
    this.router.navigate(['bear-details', btoa(id.toString())]);
  }

}
