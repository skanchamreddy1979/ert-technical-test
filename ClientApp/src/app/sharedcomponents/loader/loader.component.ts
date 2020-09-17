import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {


  loading: boolean;
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.getSpinner().subscribe((status) => {
      this.loading = status;
    });
  }

}
