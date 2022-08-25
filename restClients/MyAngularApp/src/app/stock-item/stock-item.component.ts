import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  @Input() 
  stock!: Stock;

  imageUrl!: string;

  ngOnInit() {
      this.imageUrl = `assets/${this.stock.id}.jpg`;
  }
}
