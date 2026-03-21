import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10Checklist } from './nr10-checklist';

describe('Nr10Checklist', () => {
  let component: Nr10Checklist;
  let fixture: ComponentFixture<Nr10Checklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr10Checklist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr10Checklist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
