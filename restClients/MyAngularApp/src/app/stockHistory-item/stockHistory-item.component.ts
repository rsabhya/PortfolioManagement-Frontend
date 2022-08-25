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

   // Remove the item with the specified id.
   remove(id: number) {
    this.stockHistoryService.deleteStockHistory(id);
    window.location.reload();
  }
}
