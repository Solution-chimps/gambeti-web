import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20 } from './nr20';

describe('Nr20', () => {
  let component: Nr20;
  let fixture: ComponentFixture<Nr20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
