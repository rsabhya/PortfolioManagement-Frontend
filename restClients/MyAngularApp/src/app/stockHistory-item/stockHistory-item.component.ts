import { Component, OnInit, Input } from '@angular/core';
import { timestamp } from 'rxjs';
import { StockHistory } from '../stockHistory'
import { StockHistoryService } from '../stockHistory.service';

@Component({
  selector: 'app-stockHistory-item',
  templateUrl: './stockHistory-item.component.html',
  styleUrls: ['./stockHistory-item.component.css']
})
export class StockHistoryItemComponent implements OnInit {

  @Input() 
  stockHistory!: StockHistory;
  imageUrl!: string;

  constructor(private stockHistoryService: StockHistoryService) {}
  

  ngOnInit() {

  }

  // 0 - current, 1 - bought, 2 - bought and sold 

   // update the is_sold --> selling
   update(sh: StockHistory) {
    let timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let new_sh: StockHistory = new StockHistory(sh.id, sh.ticker, sh.price, sh.amount, 1, timestamp)
    let new_sh_2: StockHistory = new StockHistory(100-sh.id, sh.ticker, sh.price, sh.amount, 2, timestamp)
    console.log(new Date());
    this.stockHistoryService.putStockToHistory(new_sh);
    this.stockHistoryService.postStockToHistory(new_sh_2);
    window.location.reload();
  }

  isSold(is_sold: number) {
    if(is_sold == 0) {
      return true
    } 
    return false
  }

  isSoldString(is_sold: number) {
    if(is_sold == 2) {
      return true
    } 
    return false
  }

  isBoughtString(is_sold: number) {
    if(is_sold == 1) {
      return true
    } 
    return false
  }

 
}
