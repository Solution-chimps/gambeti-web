import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20Treinamentos } from './nr20-treinamentos';

describe('Nr20Treinamentos', () => {
  let component: Nr20Treinamentos;
  let fixture: ComponentFixture<Nr20Treinamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20Treinamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20Treinamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
