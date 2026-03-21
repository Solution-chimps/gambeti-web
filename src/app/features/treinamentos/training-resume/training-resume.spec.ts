import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingResume } from './training-resume';

describe('TrainingResume', () => {
  let component: TrainingResume;
  let fixture: ComponentFixture<TrainingResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingResume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingResume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
