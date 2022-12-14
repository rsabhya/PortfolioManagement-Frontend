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


  // update the stock info when user buys stocks
  updateStock(stock: Stock) {
    const body = 
    {
      id : 4,
      ticker : "ABC",
      price : "199",
      amount : "74827423",
      transactionType : "SELL"
  }
   // let body: Stock = new Stock(1, 'AAPL', 171.40, 4238, "BUY")
    this.http.put<any>(this.baseUrl, body).subscribe((data) => {
      console.log(data + "data")
    }, (error) => {
      console.log(error + "error here")});
  }


  deleteStock(id: Number) {
   // let body: Stock = new Stock(1, 'AAPL', 171.40, 4238, "BUY")
    this.http.delete<any>(`${this.baseUrl}/${id}`).subscribe((data) => {
      console.log(data + "data")
    }, (error) => {
      console.log(error + "error here")});
  }



}
