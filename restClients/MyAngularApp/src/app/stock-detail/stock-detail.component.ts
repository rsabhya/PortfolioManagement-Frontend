import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit, OnDestroy {

  stock!: Stock;
  subscriberParams: any;
  
  constructor(private stockService: StockService, private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.subscriberParams = this.route.paramMap.subscribe((paramMap: any) => {
      let id: number = +paramMap.get('id');   

      // Get the specified stock, from the service.
      this.stockService.getStockById(id).subscribe({
        next: (data:any) => this.stock = data,
        error: (_:any)  => console.log("Error")
      });
    });
  }

  ngOnDestroy() {
    this.subscriberParams.unsubscribe();
  }
}
