import { Component, OnDestroy, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  finalizar: boolean = false;
  private cartSubscription: Subscription | undefined = undefined;


  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Inscreva-se em notificações de mudança no carrinho
    this.cartSubscription = this.cartService.onCartChanged().subscribe(() => {
      // Atualize a variável finalizar quando o carrinho mudar
      this.verificarCarrinho();
    });

    // Verifique o carrinho inicialmente
    this.verificarCarrinho();
  }

  ngOnDestroy(): void {
    // Certifique-se de cancelar a inscrição apenas se cartSubscription estiver definido
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  verificarCarrinho() {
    // Verifica se há itens no carrinho
    this.finalizar = this.cartService.getItems().length > 0;
  }
}
