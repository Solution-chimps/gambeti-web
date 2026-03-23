import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoSstProcesso } from './gestao-sst-processo';

describe('GestaoSstProcesso', () => {
  let component: GestaoSstProcesso;
  let fixture: ComponentFixture<GestaoSstProcesso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoSstProcesso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoSstProcesso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
