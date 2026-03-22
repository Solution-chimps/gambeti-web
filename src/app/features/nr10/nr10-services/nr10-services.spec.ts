import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10Services } from './nr10-services';

describe('Nr10Services', () => {
  let component: Nr10Services;
  let fixture: ComponentFixture<Nr10Services>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr10Services]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr10Services);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
