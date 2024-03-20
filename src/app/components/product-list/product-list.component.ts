import { CommonModule } from '@angular/common';
import { Component, inject, } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  acaiForm!: FormGroup;
  lista: any[] = []; // Defina o tipo de lista conforme necessário
  maxItems: number = 5; // Defina o valor de maxItems conforme necessário
  acaiSelecionado: any = { coberturas: [], adicionais: [] }; // Inicializa 'coberturas' e 'adicionais' como arrays vazios

  tipos: string[] = ['copo', 'tigela'];
  tamanhos: number[] = [10, 15, 30];
  cremes: string[] = ['morango', 'chocolate', 'Sem creme'];
  frutas: string[] = ['morango', 'banana', 'kiwi'];
  coberturas: string[] = ['granola', 'chocolate', 'chantilly'];
  adicionais: string[] = ['granola', 'chocolate', 'chantilly', 'perola', 'saco', 'casa'];
  maxAdicionais: number = 5;
  minAdicionais: number = 0;
  MaxCoberturas: number = 2;

  constructor(private formBuilder: FormBuilder, private cartService: CartService) {}

  ngOnInit() {
    this.acaiForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      tamanho: ['', Validators.required],
      creme: ['', Validators.required],
      fruta: ['', Validators.required],
      cobertura: [[]],
      adicionais: [[]] // Inicialize como um array vazio aqui
    });
  }
  adicionarItem(lista: any[], item: any, maxItems: number) {
    if (lista.length >= maxItems) {
        alert('Você já selecionou o número máximo de itens!');
        return; // Retorna sem adicionar o item se a lista já estiver cheia
    }

    if (!lista.includes(item)) {
        lista.push(item);
    } else {
        alert('Este item já foi selecionado!');
    }

    if (lista.length > maxItems) {
        const checkbox = document.getElementById(`checkbox-${item.id}`) as HTMLInputElement;
        if (checkbox) {
            checkbox.checked = false; // Desmarca a checkbox se o número máximo de itens foi atingido
        }
    }

}

removerItem(lista: any[], item: any) {
  let index = lista.indexOf(item);
  while (index !== -1) {
      lista.splice(index, 1);
      index = lista.indexOf(item); // Busca a próxima ocorrência do item na lista
  }
}

  adicionarAdicional(adicional: string) {
    this.adicionarItem(this.acaiSelecionado.adicionais, adicional, this.maxAdicionais);
  }

  removerAdicional(adicional: string) {
    this.removerItem(this.acaiSelecionado.adicionais, adicional);
  }

  adicionarCobertura(cobertura: string) {
    this.adicionarItem(this.acaiSelecionado.coberturas, cobertura, this.MaxCoberturas);
  }

  removerCobertura(cobertura: string) {
    this.removerItem(this.acaiSelecionado.coberturas, cobertura);
  }

  limparSelecoes() {
    this.acaiForm.reset();
    this.acaiSelecionado = { coberturas: [], adicionais: [] }; // Reinicializa o objeto acaiSelecionado
  }

  limparSelecoesAdicionais() {
    this.acaiSelecionado = {adicionais: [] }; // Reinicializa o objeto acaiSelecionado
  }

  adicionarAoCarrinho() {
    if (this.acaiForm.valid) {
      const acaiSelecionadoJSON = {
        tipo: this.acaiForm.get('tipo')?.value,
        tamanho: this.acaiForm.get('tamanho')?.value,
        creme: this.acaiForm.get('creme')?.value,
        fruta: this.acaiForm.get('fruta')?.value,
        coberturas: this.acaiSelecionado.coberturas,
        adicionais: this.acaiSelecionado.adicionais
      };

      this.cartService.addToCart(acaiSelecionadoJSON);
      this.limparSelecoes(); // Limpa as seleções após adicionar ao carrinho
    } else {
      alert('Por favor, preencha todas as opções antes de adicionar ao carrinho.');
    }
  }
}
