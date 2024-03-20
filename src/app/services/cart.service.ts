import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = JSON.parse(localStorage.getItem('cartItem') || '[]')

  constructor() { }
  addToCart(product: any)
  {this.items.push({...product,quantity:1});

  }

  getItems() {
    return this.items;}

  delete(item: any){
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  incrementQuantity(id:number){
    let item = this.items.find((id) => id === id);
    if(item){
      item.quantity++;
    }
    }
    decrementQuantity(id:number){
      let item = this.items.find((id) => id === id);
    if(item){
      item.quantity--;
    }
    }

    getTotal() {
      // Fornecer um valor inicial para a função reduce
      localStorage.setItem('cartItem',JSON.stringify(this.items));
      return this.items.reduce((acc, item) => {
        return acc + item.tamanho * item.quantity;
      }, 0); // 0 é o valor inicial

    }


}
