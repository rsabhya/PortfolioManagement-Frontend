import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockHistory } from './stockHistory'

@Injectable({
  providedIn: 'root'
})
export class StockHistoryService {

  private baseUrl: string = 'http://demospringdatabase-demospringdatabase.openshift59.conygre.com/api/stocksHistory';

  constructor(private http: HttpClient) {} 

  getStockHistory(): Observable<Array<StockHistory>>  {
      return this.http.get(this.baseUrl) as Observable<Array<StockHistory>>;
  }

  getStockHistoryById(id: number): Observable<StockHistory> {
      return this.http.get(`${this.baseUrl}/${id}`) as Observable<StockHistory>;
  }

  // call this when selling shares and when buying shares
  putStockToHistory(stockHistory: StockHistory) {
    const body = 
    {
      id : stockHistory.id,
      ticker :  stockHistory.ticker,
      price : stockHistory.price,
      amount : stockHistory.amount,
      is_sold : stockHistory.is_sold  
    }
   // let body: StockHistory = new StockHistory(1, 'AAPL', 171.40, 4238, "BUY")
    this.http.put<any>(this.baseUrl, body).subscribe((data) => {
      console.log(data + " data for stock history")
    }, (error) => {
      console.log(error + "error here for sh")});
  }

  postStockToHistory(stockHistory: StockHistory) {
    const body = 
    {
      id : stockHistory.id,
      ticker :  stockHistory.ticker,
      price : stockHistory.price,
      amount : stockHistory.amount,
      is_sold : stockHistory.is_sold  
    }
   // let body: StockHistory = new StockHistory(1, 'AAPL', 171.40, 4238, "BUY")
    this.http.post<any>(this.baseUrl, body).subscribe((data) => {
      console.log(data + " data for stock history")
    }, (error) => {
      console.log(error + "error here for sh")});
  }

  deleteStockHistory(id: Number) {
    this.http.delete<any>(`${this.baseUrl}/${id}`).subscribe((data) => {
      console.log(data + "data")
    }, (error) => {
      console.log(error + "error here")});
  }



}
