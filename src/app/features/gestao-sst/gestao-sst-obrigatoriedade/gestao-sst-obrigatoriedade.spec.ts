import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoSstObrigatoriedade } from './gestao-sst-obrigatoriedade';

describe('GestaoSstObrigatoriedade', () => {
  let component: GestaoSstObrigatoriedade;
  let fixture: ComponentFixture<GestaoSstObrigatoriedade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoSstObrigatoriedade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoSstObrigatoriedade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
