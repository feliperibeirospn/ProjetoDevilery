import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { RouterLink, Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CommonModule,ProductListComponent,RouterLink,CartComponent],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss'
})
export class CartModalComponent {
  CartService = inject(CartService);
  deleteFromCart(item:any){
    this.CartService.delete(item)
  }
  constructor(private router: Router) { }
  openCartModal() {
    // Navegar para a rota do modal do carrinho
    this.router.navigate(['/cart-modal']);
  }

}
