import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr13Header } from './nr13-header';

describe('Nr13Header', () => {
  let component: Nr13Header;
  let fixture: ComponentFixture<Nr13Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr13Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr13Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
