import { Component, OnInit, Input } from '@angular/core';
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

   // update the is_sold
   update(sh: StockHistory) {
    let new_sh: StockHistory = new StockHistory(sh.id, sh.ticker, sh.price, sh.amount, 1)
    this.stockHistoryService.putStockToHistory(new_sh);
    window.location.reload();
  }

  isSold(is_sold: number) {
    if(is_sold == 0) {
      return true
    } 
    return false
  }

 
}
