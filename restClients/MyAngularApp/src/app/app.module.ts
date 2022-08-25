import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CsvPipe } from './csv.pipe';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockHistoryListComponent } from './stockHistory-list/stockHistory-list.component';
import { StockListHeaderComponent } from './stock-list-header/stock-list-header.component';
import { StockListFooterComponent } from './stock-list-footer/stock-list-footer.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { StockHistoryItemComponent } from './stockHistory-item/stockHistory-item.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    CsvPipe,
    StockListComponent,
    StockListHeaderComponent,
    StockHistoryListComponent,
    StockListFooterComponent,
    StockItemComponent,
    StockHistoryItemComponent, 
    StockDetailComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: "IS_VERBOSE_LOGGER", useValue: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
