import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Beer } from './beer.model';
 
@Injectable()
export class DataService {
 
    private beerUrl ="/api/beer";


    constructor(private http: HttpClient) {
    }
     
    getAllBeers(){
        return this.http.get(this.beerUrl)
    }

    getProduct(id: number) {
        return this.http.get(this.beerUrl + '/' + id);
    }
     
    createProduct(product: Beer) {
        return this.http.post(this.beerUrl, product);
    }
    updateProduct(product: Beer) {
  
        return this.http.put(this.beerUrl, product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.beerUrl + '/' + id);
    }
}