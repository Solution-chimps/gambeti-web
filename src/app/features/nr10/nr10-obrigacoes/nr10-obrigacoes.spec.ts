import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10Obrigacoes } from './nr10-obrigacoes';

describe('Nr10Obrigacoes', () => {
  let component: Nr10Obrigacoes;
  let fixture: ComponentFixture<Nr10Obrigacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr10Obrigacoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr10Obrigacoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
