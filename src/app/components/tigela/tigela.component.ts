import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, } from '@angular/router';
import { CartModalComponent } from '../cart-modal/cart-modal.component';

@Component({
  selector: 'app-tigela',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,CartModalComponent],
  templateUrl: './tigela.component.html',
  styleUrl: './tigela.component.scss'
})
export class TigelaComponent implements OnInit {
  acaiForm!: FormGroup;
  lista: any[] = []; // Defina o tipo de lista conforme necessário
  maxAdicionais: number = 5; // Defina o valor de maxItems conforme necessário
  maxItemsCobertura:number = 2; // Defina o valor
  acaiSelecionado: any = { coberturas: [], adicionais: [] }; // Inicializa 'coberturas' e 'adicionais' como arrays vazios

  tipos: string[] = ['copo', 'tigela'];
  prices: number[] = [10 , 12, 16,20,34];
  pricesTigela: number[] = [10 , 12, 16,20,34];
  pricesCopo: number[] = [10, 15, 15];
  visualPrices: string[] = ['250G-10.00R$','350G-12.00R$','450G-16.00R$','550G-20.00R$','1KG-34.00R$',];

  cremes: string[] = ['Sem creme', 'Ovomaltine', 'morango', 'Tapioca', 'Cupuaçu','Energético','condensado','ninho caseiro','ninho','oreo'];
  frutas: string[] = ['morango', 'banana', 'kiwi',];
  coberturas: string[] = [ 'Leite condensado', 'Morango', 'Chocolate', 'Caramelo','Avelã','uva'];
  adicionais: string[] = ['BIS','OREO','BATOM','GOTAS','DISQUETE','SERENATA',
  'CHOCOBOL(GRANDE)','CHOCOBOL(MINI)','COCO RALADO','GRANOLA','JUJUBA','GRANULADO','PAÇOCA',
  'AMENDOIM','CASTANHA','TUBETES','FLOCOS DE ARROZ','OVOMALTINE','LEITE EM PÓ','FARINHA LÁCTEA'];

  constructor(private formBuilder: FormBuilder, private cartService: CartService,private router: Router) {}

  ngOnInit() {
    this.acaiForm = this.formBuilder.group({
      tipo: ['tijela', Validators.required], //tijela adicionada manualmente
      price: ['', Validators.required],
      creme: ['', Validators.required],
      fruta: ['', Validators.required],
      coberturas: [[]],
      adicionais: [[]] // Inicialize como um array vazio aqui
    });
  }
  adicionarItem(lista: any[], item: any, maxItems: number) {
    // Verifica se a lista já atingiu o número máximo de itens
    if (lista.length >= maxItems) {
        alert('Você já selecionou o número máximo de itens!');
        return; // Retorna sem adicionar o item se a lista já estiver cheia
    }

    // Verifica se o item já foi selecionado
    if (lista.includes(item)) {
        alert('Este item já foi selecionado!');
        return; // Retorna sem adicionar o item novamente
    }

    // Adiciona o item à lista
    lista.push(item);

    // Verifica se o número máximo de itens foi atingido após adicionar o item
    if (lista.length > maxItems) {
        // Desmarca a última checkbox se o número máximo de itens foi atingido
        const lastAddedItem = lista[lista.length - 1];
        const checkbox = document.getElementById(`checkbox-${lastAddedItem.id}`) as HTMLInputElement;
        if (checkbox) {
            checkbox.checked = false;
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
    this.adicionarItem(this.acaiSelecionado.coberturas, cobertura, this.maxItemsCobertura);
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

  limparSelecoesCoberturas(){
    this.acaiSelecionado = {coberturas: [] };
  }

  adicionarAoCarrinho() {
    if (this.acaiForm.valid) {
      const acaiSelecionadoJSON = {
        tipo: this.acaiForm.get('tipo')?.value,
        price: this.acaiForm.get('price')?.value,
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

  confirmarPedido() {
    // Adicione aqui a lógica para confirmar o pedido
    // Exemplo: chamar a função confirmarPedido que você já escreveu
    // this.confirmarPedido();
  }
  openCartModal() {
    // Navegar para a rota do modal do carrinho
    this.router.navigate(['/cart-modal']);
  }
}

