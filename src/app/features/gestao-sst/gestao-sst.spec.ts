import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoSst } from './gestao-sst';

describe('GestaoSst', () => {
  let component: GestaoSst;
  let fixture: ComponentFixture<GestaoSst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoSst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoSst);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
