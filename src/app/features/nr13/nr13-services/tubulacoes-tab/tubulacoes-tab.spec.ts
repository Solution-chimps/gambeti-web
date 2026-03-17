import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TubulacoesTab } from './tubulacoes-tab';

describe('TubulacoesTab', () => {
  let component: TubulacoesTab;
  let fixture: ComponentFixture<TubulacoesTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TubulacoesTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TubulacoesTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
