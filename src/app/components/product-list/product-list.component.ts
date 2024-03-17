import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  CartService = inject(CartService);
  products = [
    { name: 'Product 1', price: 100.00, id: 1,img:"src", description:"Product"},
    { name: 'Product 2', price: 100.00, id: 2,img:"src", description:"Product"},
    { name: 'Product 3', price: 100.00, id: 3,img:"src", description:"Product"},
    { name: 'Product 4', price: 100.00, id: 4,img:"src", description:"Product"},


  ];
  complementos = [
    { name: 'Complemento 1', price: 100.00, id: 1,img:"src", description:"Complemento"},
    { name: 'Complemento 2', price: 100.00, id: 2,img:"src", description:"Complemento"},
    { name: 'Complemento 3', price: 100.00, id: 3,img:"src", description:"Complemento"},
    { name: 'Complemento 4', price: 100.00, id: 4,img:"src", description:"Complemento"},
  ]

  
  addToCart(product: any){
    this.CartService.addToCart(product);
  }
}
