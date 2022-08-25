import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-list-footer',
  templateUrl: './stock-list-footer.component.html',
  styleUrls: ['./stock-list-footer.component.css']
})
export class StockListFooterComponent {
  timestamp = new Date()
}
