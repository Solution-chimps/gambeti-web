import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treinamentos } from './treinamentos';

describe('Treinamentos', () => {
  let component: Treinamentos;
  let fixture: ComponentFixture<Treinamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Treinamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Treinamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
