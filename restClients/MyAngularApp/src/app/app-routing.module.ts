import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AnotherComponent } from './another/another.component'
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component'
import { StockListComponent } from './stock-list/stock-list.component'
import { StockDetailComponent } from './stock-detail/stock-detail.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'another', component: AnotherComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'stocklist', component: StockListComponent },
  { path: 'stockDetail/:id', component: StockDetailComponent}, 
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
