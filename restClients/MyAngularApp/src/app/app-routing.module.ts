import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { StockListComponent } from './stock-list/stock-list.component'
import { StockDetailComponent } from './stock-detail/stock-detail.component'
import { StockHistoryListComponent } from './stockHistory-list/stockHistory-list.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stocklist', component: StockListComponent },
  { path: 'stockHistorylist', component: StockHistoryListComponent },
  { path: 'stockDetail/:id', component: StockDetailComponent}, 
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
