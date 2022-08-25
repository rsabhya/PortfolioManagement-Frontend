import { Component } from '@angular/core';
import { StockHistory } from '../stockHistory';
import { StockHistoryService } from '../stockHistory.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-stockHistory-list',
  templateUrl: './stockHistory-list.component.html',
  styleUrls: ['./stockHistory-list.component.css'],
})
export class StockHistoryListComponent {

  StockHistorys: Observable<Array<StockHistory>>; 

  constructor(StockHistoryService: StockHistoryService) { 
    this.StockHistorys = StockHistoryService.getStockHistory(); 
  }

}
