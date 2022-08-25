import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Product {
  constructor(
    public id: number, 
    public title: string, 
    public price: number) 
    {}
}

class Item {
  constructor(
    public id: number, 
    public title: string, 
    public quantity: number, 
    public price: number,
    public timestamp: Date = new Date()) 
    {}
}

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {

  // Items in the cart.
  items: Array<Item> = [];
    
  // Fields relating to the "slice" pipe.
  sliceStart: number;
  sliceEnd: number;
  
  // Field relating to the "i18nPlural" pipes.
  messageMapping = {
    '=1':    'One item',
    'other': '# items'
  };

  // Fields relating to the "Add item to shopping cart" form.
  products: Array<Product> = [];
  selectedProduct!: Product;
  quantity!: number;

  constructor() {
    this.products.push(new Product(0, 'Skis', 250));
    this.products.push(new Product(1, 'iPad', 3000));
    this.products.push(new Product(2, 'Bugatti', 2000000));
    this.products.push(new Product(3, 'Cardiff City shirt', 5));
    this.products.push(new Product(4, 'Swansea City shirt', 45));

    this.sliceStart = 0;
    this.sliceEnd = this.items.length; 
  }

  // Find the array index of the item with the specified id, or -1 if not found.
  private findItem(id: number) : number {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        return i;
      }
    }
    return -1;
  }
  
  // Remove the item with the specified id.
  remove(id: number) {
    let index = this.findItem(id);
    if (index != -1) {
      this.items.splice(index, 1);
    }
  }
  
  // Calculate the line cost for the item with the specified id.
  lineCost(id: number) : number {
    let index = this.findItem(id);
    if (index != -1) {
      let item = this.items[index];
      return item.price * item.quantity
    }
    else {
      return 0;
    }
  }
  
  // Calculate the total cost of all lines in the cart.
  totalCartCost() : number {
    let total = 0;
    for (let item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  }

  // Add item to shopping cart.
  add(form: NgForm) {
    let index = this.findItem(this.selectedProduct.id);
    if (index != -1) {
      this.items[index].quantity += this.quantity;
    }
    else {
      this.items.push(new Item(
        this.selectedProduct.id, 
        this.selectedProduct.title, 
        this.quantity,
        this.selectedProduct.price)); 
    }

    // Tidy up the UI.
    this.sliceStart = 0;
    this.sliceEnd = this.items.length;        
    form.reset(); 
  }
}
