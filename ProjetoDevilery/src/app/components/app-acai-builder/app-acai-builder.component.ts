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
  addons: string[] = ['Granola', 'Chocolate', 'Chantilly', 'Coco', 'Ovomaltine','passas','amendoin']; // Renomeie para addons
  fruits: string[] = ['Morango', 'Banana', 'Kiwi'];
  toppings: string[] = ['Granola', 'Chocolate', 'Chantilly'];

  selectedType: string = '';
  selectedSize: string = '';
  selectedCream: string = '';
  selectedAddons: string[] = [];
  selectedFruit: string = '';
  selectedTopping: string = '';

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
    this.selectedType = '';
    this.selectedSize = '';
    this.selectedCream = '';
    this.selectedAddons = [];
    this.selectedFruit = '';
    this.selectedTopping = '';
  }

  toggleAddonCheckbox(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const addon = checkbox.value;

    if (checkbox.checked) {
      if (this.selectedAddons.length < 5) {
        this.selectedAddons.push(addon);
      } else {
        // Implemente uma lógica para lidar com o limite de 5 addons selecionados
        console.log('Limite de addons alcançado.');
        checkbox.checked = false; // Desmarca o checkbox se o limite for alcançado
      }
    } else {
      const index = this.selectedAddons.indexOf(addon);
      if (index !== -1) {
        this.selectedAddons.splice(index, 1);
      }
    }
  }

}
