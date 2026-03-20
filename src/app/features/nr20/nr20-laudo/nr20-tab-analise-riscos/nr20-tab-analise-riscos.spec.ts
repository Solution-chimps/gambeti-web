import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20TabAnaliseRiscos } from './nr20-tab-analise-riscos';

describe('Nr20TabAnaliseRiscos', () => {
  let component: Nr20TabAnaliseRiscos;
  let fixture: ComponentFixture<Nr20TabAnaliseRiscos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20TabAnaliseRiscos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20TabAnaliseRiscos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
