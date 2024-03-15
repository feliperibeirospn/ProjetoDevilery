import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
interface AcaiOption {
  name: string;
  value: string;
}


@Component({
  selector: 'app-app-acai-builder',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app-acai-builder.component.html',
  styleUrl: './app-acai-builder.component.scss'
})
export class AppAcaiBuilderComponent {
  types: string[] = ['Copo', 'Tigela'];
  sizes: string[] = ['Pequeno', 'Médio', 'Grande'];
  creams: string[] = ['Morango', 'Chocolate', 'Original'];
  addon: string[] = ['Granola', 'Chocolate', 'Chantilly']; // Adicione mais addons aqui
  fruits: string[] = ['Morango', 'Banana', 'Kiwi']; // Adicione mais frutas aqui
  toppings: string[] = ['Granola', 'Chocolate', 'Chantilly']; // Adicione mais coberturas aqui

  selectedType: string='tigela';
  selectedSize: string='10';
  selectedCream: string = 'ovomaltine';
  selectedAddons: string[] = [];
  selectedFruit: string = 'morango';
  selectedTopping: string = 'feijao'; // Adicione um valor inicial aqui

  adicionarAoCarrinho() {
    // Implemente a lógica para adicionar ao carrinho aqui
    console.log('Adicionado ao carrinho:');
    console.log('Tipo:', this.selectedType);
    console.log('Tamanho:', this.selectedSize);
    console.log('Creme:', this.selectedCream);
    console.log('Adicionais:', this.selectedAddons);
    console.log('Fruta:', this.selectedFruit);
    console.log('Cobertura:', this.selectedTopping);
  }


  limparSelecoes() {
    this.selectedType = ''; // Atribua uma string vazia ('') ao invés de null
    this.selectedSize = '';
    this.selectedCream = '';
    this.selectedAddons = [];
    this.selectedFruit = '';
    this.selectedTopping = '';


  }

  toggleAddonCheckbox(addon: string, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.toggleAddon(addon);
    } else {
      // Implemente a lógica para remover o addon selecionado, se necessário
    }
  }

  toggleAddon(addon: string) {
    // Implemente a lógica para adicionar ou remover o addon selecionado
  }
}

