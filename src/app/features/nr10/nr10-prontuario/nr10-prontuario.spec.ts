import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10Prontuario } from './nr10-prontuario';

describe('Nr10Prontuario', () => {
  let component: Nr10Prontuario;
  let fixture: ComponentFixture<Nr10Prontuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr10Prontuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr10Prontuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
