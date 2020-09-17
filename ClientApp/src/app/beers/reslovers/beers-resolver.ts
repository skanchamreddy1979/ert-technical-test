import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BeersService } from '../services/beers-service';

@Injectable()
export class BeersListResolver implements Resolve<any> {
    constructor(private service: BeersService) { }
    resolve(): Observable<any> {
        return this.service.listbeers(1);
    }
}
