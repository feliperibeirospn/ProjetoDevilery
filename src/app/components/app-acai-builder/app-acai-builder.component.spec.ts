import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAcaiBuilderComponent } from './app-acai-builder.component';

describe('AppAcaiBuilderComponent', () => {
  let component: AppAcaiBuilderComponent;
  let fixture: ComponentFixture<AppAcaiBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAcaiBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppAcaiBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
