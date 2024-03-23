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

  CartService = inject(CartService);


  deleteFromCart(item:any){
    this.CartService.delete(item)
  }



}
