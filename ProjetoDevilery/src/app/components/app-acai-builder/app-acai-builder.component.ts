import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AcaiOption {
  name: string;
  value: string; // Adicionando a propriedade value
}

@Component({
  selector: 'app-app-acai-builder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app-acai-builder.component.html',
  styleUrls: ['./app-acai-builder.component.scss']
})
export class AppAcaiBuilderComponent {
  types: AcaiOption[] = [
    { name: 'Copo', value: 'copo' },
    { name: 'Tigela', value: 'tigela' }
  ];

  sizes: AcaiOption[] = [
    { name: 'Pequeno', value: 'pequeno' },
    { name: 'Médio', value: 'medio' },
    { name: 'Grande', value: 'grande' }
  ];

  creams: AcaiOption[] = [
    { name: 'Morango', value: 'morango' },
    { name: 'Chocolate', value: 'chocolate' },
    { name: 'Original', value: 'original' }
  ];

  addons: AcaiOption[] = [
    { name: 'Granola', value: 'granola' },
    { name: 'Chocolate', value: 'chocolate' },
    { name: 'Chantilly', value: 'chantilly' },
    { name: 'Coco', value: 'coco' },
    { name: 'Ovomaltine', value: 'ovomaltine' },
    { name: 'Passas', value: 'passas' },
    { name: 'Amendoin', value: 'amendoin' }
  ];

  fruits: AcaiOption[] = [
    { name: 'Morango', value: 'morango' },
    { name: 'Banana', value: 'banana' },
    { name: 'Kiwi', value: 'kiwi' }
  ];

  toppings: AcaiOption[] = [
    { name: 'Granola', value: 'granola' },
    { name: 'Chocolate', value: 'chocolate' },
    { name: 'Chantilly', value: 'chantilly' }
  ];

  selectedType: string = '';
  selectedSize: string = '';
  selectedCream: string = '';
  selectedAddons: string[] = [];
  selectedFruit: string = '';
  selectedTopping: string = '';

  toggleAddonCheckbox(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const addon = checkbox.value;

    if (checkbox.checked) {
      if (this.selectedAddons.length < 5) {
        this.selectedAddons.push(addon);
      } else {
        console.log('Limite de addons alcançado.');
        checkbox.checked = false;
      }
    } else {
      const index = this.selectedAddons.indexOf(addon);
      if (index !== -1) {
        this.selectedAddons.splice(index, 1);
      }
    }
  }

  cartItems: CartItem[] = [];

 validarSelecoes(): boolean {
  return (
    !!this.selectedType &&
    !!this.selectedSize &&
    !!this.selectedCream &&
    this.selectedAddons.length > 0 &&
    !!this.selectedFruit &&
    !!this.selectedTopping
  );
}

adicionarAoCarrinho() {
  if (this.validarSelecoes()) {
    const newItem: CartItem = {
      type: this.selectedType,
      size: this.selectedSize,
      cream: this.selectedCream,
      addons: this.selectedAddons,
      fruit: this.selectedFruit,
      topping: this.selectedTopping
    };

    this.cartItems.push(newItem);
    console.log('Item adicionado ao carrinho:', newItem);
  } else {
    console.log('Por favor, selecione todas as opções antes de adicionar ao carrinho.');
  }
}

  removerDoCarrinho(index: number) {
    this.cartItems.splice(index, 1);
  }

  limparSelecoes() {
    this.selectedType = '';
    this.selectedSize = '';
    this.selectedCream = '';
    this.selectedAddons = [];
    this.selectedFruit = '';
    this.selectedTopping = '';
  }
}

export interface CartItem {
  type: string;
  size: string;
  cream: string;
  addons: string[];
  fruit: string;
  topping: string;
}
