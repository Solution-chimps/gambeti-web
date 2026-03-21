import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20Faq } from './nr20-faq';

describe('Nr20Faq', () => {
  let component: Nr20Faq;
  let fixture: ComponentFixture<Nr20Faq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20Faq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20Faq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
