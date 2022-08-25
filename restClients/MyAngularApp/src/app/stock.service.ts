import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './stock'

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl: string = 'http://demospringdatabase-demospringdatabase.openshift59.conygre.com/api/stocks';

  constructor(private http: HttpClient) {} 

  getStocks(): Observable<Array<Stock>>  {
      return this.http.get(this.baseUrl) as Observable<Array<Stock>>;
  }

  getStockById(id: number): Observable<Stock> {
      return this.http.get(`${this.baseUrl}/${id}`) as Observable<Stock>;
  }
}
