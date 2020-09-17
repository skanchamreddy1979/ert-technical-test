import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BearService {

  constructor(private httpService: HttpService) { }

  getAllBears(): Observable<any> {
    return this.httpService.get('/beers');
  }
  getBearById(id: number): Observable<any> {
    return this.httpService.get('/beers/' + id);
  }
}
