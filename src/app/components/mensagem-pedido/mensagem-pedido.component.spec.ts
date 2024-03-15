import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemPedidoComponent } from './mensagem-pedido.component';

describe('MensagemPedidoComponent', () => {
  let component: MensagemPedidoComponent;
  let fixture: ComponentFixture<MensagemPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensagemPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensagemPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
