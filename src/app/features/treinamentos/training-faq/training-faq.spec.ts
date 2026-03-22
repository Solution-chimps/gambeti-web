import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingFaq } from './training-faq';

describe('TrainingFaq', () => {
  let component: TrainingFaq;
  let fixture: ComponentFixture<TrainingFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingFaq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
