import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20TabPlanoEmergencia } from './nr20-tab-plano-emergencia';

describe('Nr20TabPlanoEmergencia', () => {
  let component: Nr20TabPlanoEmergencia;
  let fixture: ComponentFixture<Nr20TabPlanoEmergencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20TabPlanoEmergencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20TabPlanoEmergencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
