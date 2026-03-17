import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr13Services } from './nr13-services';

describe('Nr13Services', () => {
  let component: Nr13Services;
  let fixture: ComponentFixture<Nr13Services>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr13Services]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr13Services);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
