import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20Prontuario } from './nr20-prontuario';

describe('Nr20Prontuario', () => {
  let component: Nr20Prontuario;
  let fixture: ComponentFixture<Nr20Prontuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20Prontuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20Prontuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
