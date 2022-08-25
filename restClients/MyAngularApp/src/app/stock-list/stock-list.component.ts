import { Component } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent {

  Stocks: Observable<Array<Stock>>; 

  constructor(StockService: StockService) { 
    this.Stocks = StockService.getStocks(); 
  }

}
