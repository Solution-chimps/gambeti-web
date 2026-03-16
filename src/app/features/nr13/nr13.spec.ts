import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr13 } from './nr13';

describe('Nr13', () => {
  let component: Nr13;
  let fixture: ComponentFixture<Nr13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr13);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
