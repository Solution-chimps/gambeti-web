import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr13Prontuario } from './nr13-prontuario';

describe('Nr13Prontuario', () => {
  let component: Nr13Prontuario;
  let fixture: ComponentFixture<Nr13Prontuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr13Prontuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr13Prontuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
