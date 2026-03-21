import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20Obrigacoes } from './nr20-obrigacoes';

describe('Nr20Obrigacoes', () => {
  let component: Nr20Obrigacoes;
  let fixture: ComponentFixture<Nr20Obrigacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20Obrigacoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20Obrigacoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
