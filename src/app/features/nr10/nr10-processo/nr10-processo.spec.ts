import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10Processo } from './nr10-processo';

describe('Nr10Processo', () => {
  let component: Nr10Processo;
  let fixture: ComponentFixture<Nr10Processo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr10Processo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr10Processo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
