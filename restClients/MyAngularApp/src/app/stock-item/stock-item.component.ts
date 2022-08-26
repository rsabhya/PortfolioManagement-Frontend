import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock'
import { StockHistory } from '../stockHistory'
import { StockService } from '../stock.service';
import { StockHistoryService } from '../stockHistory.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  @Input() 
  stock!: Stock;
  imageUrl!: string;

  constructor(private stockService: StockService, private stockHistoryService: StockHistoryService) {}


  ngOnInit() {

  }

   // Remove the item with the specified id.
   remove(stock: Stock) {
    let timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let sh: StockHistory = new StockHistory(stock.id, stock.ticker, stock.price, stock.amount, 0,timestamp)
    this.stockService.deleteStock(stock.id);
    console.log(new Date());
    this.stockHistoryService.putStockToHistory(sh);
    window.location.reload();
  }
}
