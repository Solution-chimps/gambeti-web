import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10PIE } from './nr10-pie';

describe('Nr10PIE', () => {
  let component: Nr10PIE;
  let fixture: ComponentFixture<Nr10PIE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr10PIE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr10PIE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
