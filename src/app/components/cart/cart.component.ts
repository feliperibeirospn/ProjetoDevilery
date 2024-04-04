import { CommonModule } from '@angular/common';
import { Component,inject,Input, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ProductListComponent,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
   linkWhatsApp: string = '';
  CartService = inject(CartService);


  deleteFromCart(item:any){
    this.CartService.delete(item)
  }

  constructor(private cartService: CartService) {}

  criarLinkWhatsApp(): string {
    const mensagemItens = this.cartService.getItemsMessage();
    const numeroTelefone = '5584988947882'; // Substitua pelo número de telefone desejado

    const mensagemCodificada = encodeURIComponent(mensagemItens);
    return `https://wa.me/${numeroTelefone}/?text=${mensagemCodificada}`;
  }

  gerarLinkWhatsApp(): void {
    this.linkWhatsApp = this.cartService.criarLinkWhatsApp();
    window.location.href = this.linkWhatsApp;
    this.cartService.clearCart();
  }
}
