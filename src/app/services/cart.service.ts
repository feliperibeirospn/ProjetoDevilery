import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = JSON.parse(localStorage.getItem('cartItem') || '[]')

  constructor() { }
  addToCart(product: any) {
    const itemName = `Produto ${this.items.length + 1}`; // Nome do produto sequencial
    this.items.push({ ...product, name: itemName, quantity: 1 });
    localStorage.setItem('cartItem', JSON.stringify(this.items));
    //ambiente de teste
    console.log('Itens no carrinho:', this.items);
  }

  getItems() {
    return this.items;}

    delete(item: any) {
      this.items = this.items.filter((i) => i !== item);
      localStorage.setItem('cartItem', JSON.stringify(this.items));

      //ambiente de teste
      console.log('Itens no carrinho:', this.items);
    }

    incrementQuantity(id: number) {
      const item = this.items.find((item) => item.id === id);
      if (item) {
        item.quantity++;
        localStorage.setItem('cartItem', JSON.stringify(this.items));
      }
    }

    decrementQuantity(id: number) {
      const item = this.items.find((item) => item.id === id);
      if (item) {
        item.quantity--;
        localStorage.setItem('cartItem', JSON.stringify(this.items));
      }
    }

    getTotal() {
      // Fornecer um valor inicial para a função reduce

      localStorage.setItem('cartItem',JSON.stringify(this.items));
      return this.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;

      }, 0); // 0 é o valor inicial

    }



}
