import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BeerService } from 'src/app/beer/services/beer.service';

@Injectable()
export class BeersListResolver implements Resolve<any> {
    constructor(private service: BeerService) { }
    resolve(): Observable<any> {
        return this.service.getAllBeers();
    }
}
