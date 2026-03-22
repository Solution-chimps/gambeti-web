import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinamentosHeader } from './treinamentos-header';

describe('TreinamentosHeader', () => {
  let component: TreinamentosHeader;
  let fixture: ComponentFixture<TreinamentosHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreinamentosHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinamentosHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
