import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20Classification } from './nr20-classification';

describe('Nr20Classification', () => {
  let component: Nr20Classification;
  let fixture: ComponentFixture<Nr20Classification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20Classification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20Classification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
