import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr13Faq } from './nr13-faq';

describe('Nr13Faq', () => {
  let component: Nr13Faq;
  let fixture: ComponentFixture<Nr13Faq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr13Faq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr13Faq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
