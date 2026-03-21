import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10 } from './nr10';

describe('Nr10', () => {
  let component: Nr10;
  let fixture: ComponentFixture<Nr10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr10]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Nr10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
