import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TigelaComponent } from './tigela.component';

describe('TigelaComponent', () => {
  let component: TigelaComponent;
  let fixture: ComponentFixture<TigelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TigelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TigelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
