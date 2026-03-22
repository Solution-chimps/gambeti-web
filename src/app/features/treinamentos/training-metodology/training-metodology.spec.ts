import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingMetodology } from './training-metodology';

describe('TrainingMetodology', () => {
  let component: TrainingMetodology;
  let fixture: ComponentFixture<TrainingMetodology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingMetodology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingMetodology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
