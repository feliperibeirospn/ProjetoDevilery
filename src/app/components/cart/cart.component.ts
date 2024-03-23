import { CommonModule } from '@angular/common';
import { Component,inject,Input, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

const aliasees = {
  tamanho: 'Tamanho',
  cor: 'Cor',
  // Adicione mais aliases conforme necessário
};

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ProductListComponent,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() item: any; // Aqui você define o tipo do item, presumivelmente um objeto qualquer

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

 aliases = aliasees;

  CartService = inject(CartService);


  deleteFromCart(item:any){
    this.CartService.delete(item)
  }



}
