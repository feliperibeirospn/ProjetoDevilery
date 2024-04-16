import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = JSON.parse(localStorage.getItem('cartItem') || '[]')
  private cartChangedSubject = new BehaviorSubject<void>(undefined);

  constructor(private router: Router) { }
  addToCart(product: any) {
    const itemName = `Açai ${this.items.length + 1}`;
    const price = typeof product.price === 'number' ? product.price : parseFloat(product.price) || 0;
    const total = price * 1; // Inicializa o total com o preço multiplicado pela quantidade (1)
    this.items.push({ ...product, name: itemName, quantity: 1, price: price, total: total}); // Adiciona a propriedade total
    localStorage.setItem('cartItem', JSON.stringify(this.items));
    console.log('Itens no carrinho:', this.items);
    this.router.navigateByUrl('/home');
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
        item.total = item.price * item.quantity; // Atualiza o total
        localStorage.setItem('cartItem', JSON.stringify(this.items));
      }
    }

    decrementQuantity(id: number) {
      const itemIndex = this.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1 && this.items[itemIndex].quantity > 0) {
        this.items[itemIndex].quantity--;
        this.items[itemIndex].total = this.items[itemIndex].price * this.items[itemIndex].quantity; // Atualiza o total
        if (this.items[itemIndex].quantity === 0) {
          this.items.splice(itemIndex, 1);
        }
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

    getItemsMessage(): string {
      let message = 'Itens no carrinho:\n';
      this.items.forEach((item, index) => {
        message += `Açai ${index + 1}\n`;
        message += `Tipo: ${item.tipo}\n`;
        message += `Preço: ${item.price ? 'R$' + item.price.toFixed(2) : 'Preço não disponível'}\n`;
        message += `Creme: ${item.creme}\n`;
        message += `Fruta: ${item.fruta}\n`;
        message += `Coberturas: ${item.coberturas.join(',')}\n`;
        message += `Adicionais: ${item.adicionais.join(',')}\n`;
        message += `Quantidade: ${item.quantity}\n`;
        message += `Total: R$${(item.total+2).toFixed(2)}\n\n`
      });
      return message;
  }
  criarLinkWhatsApp(): string {
    const numeroTelefone = '+5584988947882'; // Substitua pelo número de telefone desejado
    let mensagemItens = this.getItemsMessage();
    const mensagemCodificada = encodeURIComponent(mensagemItens);
    return `https://wa.me/${numeroTelefone}/?text=${mensagemCodificada}`;
}

clearCart() {
  this.items = []; // Limpa o array de itens
  localStorage.removeItem('cartItem'); // Remove o item do carrinho do localStorage
}
notifyCartChanged() {
  this.cartChangedSubject.next();
}

// Método para se inscrever em notificações de mudança no carrinho
onCartChanged() {
  return this.cartChangedSubject.asObservable();
}
}
