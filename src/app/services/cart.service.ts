import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = JSON.parse(localStorage.getItem('cartItem') || '[]')

  constructor() { }
  addToCart(product: any) {
    const itemName = `Product ${this.items.length + 1}`; // Nome do produto sequencial
    this.items.push({ ...product, name: itemName, quantity: 1 });
    localStorage.setItem('cartItem', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;}

    delete(item: any) {
      this.items = this.items.filter((i) => i !== item);
      localStorage.setItem('cartItem', JSON.stringify(this.items));
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
        return acc + item.tamanho * item.quantity;
      }, 0); // 0 é o valor inicial

    }


}
