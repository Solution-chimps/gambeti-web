import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10Header } from './nr10-header';

describe('Nr10Header', () => {
  let component: Nr10Header;
  let fixture: ComponentFixture<Nr10Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr10Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr10Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
