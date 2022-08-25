import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock'
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  @Input() 
  stock!: Stock;
  imageUrl!: string;

  constructor(private stockService: StockService) {}


  ngOnInit() {

  }

   // Remove the item with the specified id.
   remove(id: number) {
    this.stockService.deleteStock(id);
    window.location.reload();
  }
}
